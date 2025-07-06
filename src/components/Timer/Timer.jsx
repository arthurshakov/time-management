import { useEffect, useRef, useState } from 'react';
import { IconButton, TextInput, Select } from '../../ui';
import { saveTimeEntry } from '../../bff/operations';
import styles from './timer.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { authSelector, projectsSelector } from '../../selectors';
import { AuthWrapper } from '../AuthWrapper/AuthWrapper';
import { getTimeFromSeconds } from '../../utils';
import { updateProjectAction } from '../../actions';

export const TimerBlock = () => {
  const [projectOptions, setProjectOptions] = useState([]);
  // const [isLoadingProjects, setIsLoadingProjects] = useState(false);
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [taskName, setTaskName] = useState('');
  const intervalRef = useRef(null);
  const {isAuthenticated, user} = useSelector(authSelector);
  const projects = useSelector(projectsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated && projects) {
      let options = projects.map(project => ({
        value: project.id,
        label: project.name,
      }));

      setProjectOptions(options);
    }
  }, [isAuthenticated, projects]);

  // // Fetch projects on component mount
  // useEffect(() => {
  //   const fetchProjects = async () => {
  //     setIsLoadingProjects(true);

  //     try {
  //       const projects = await getProjects();

  //       // Transforming projects from backend to select options format
  //       const options = projects.map(project => ({
  //         value: project.id,
  //         label: project.name,
  //       }));

  //       setProjectOptions(options);
  //     } catch (error) {
  //       console.error('Failed to load projects:', error);
  //     } finally {
  //       setIsLoadingProjects(false);
  //     }
  //   }

  //   fetchProjects();
  // }, [])

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }
  }, []);

  const pause = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }

  const play = () => {
    intervalRef.current = setInterval(() => {
      setTotalSeconds(prev => prev + 1);
    }, 1000);
  }

  const onPlayPause = () => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }

    setIsPlaying(!isPlaying);
  }

  const onReset = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    setIsPlaying(false);
    setTotalSeconds(0);
  }

  const onSave = async () => {
    if (totalSeconds === 0) {
      return;
    }

    pause();

    if (!isAuthenticated) {
      alert('Log in to save your time entry');
      return;
    }

    if (!selectedProject) {
      alert('Select a project');
      return;
    }

    if (!taskName.trim()) {
      alert('Enter a task name');
      return;
    }

    const entry = {
      projectId: selectedProject.value,
      userId: user.id,
      projectName: selectedProject.label,
      taskName: taskName.trim(),
      duration: totalSeconds,
      date: new Date().toISOString()
    };

    const projectDuration = projects.find(({id}) => selectedProject.value === id)?.duration;

    try {
      const responseFromSavingEntry = await saveTimeEntry(entry, projectDuration);
      dispatch(updateProjectAction(responseFromSavingEntry.res.project));
      console.log('updated project action');
      console.log(responseFromSavingEntry.res.project);

      alert('Time entry saved successfully!');
      onReset();
      setTaskName(''); // Clear task name
      setSelectedProject(null); // Clear project selection
    } catch (error) {
      console.error('Failed to save time entry:', error);
      alert('Failed to save time entry. Please try again.');
    }
  };

  return (
    <div className={styles.timer__block}>
      <div className={styles.timer}>
        <div className={styles.timer__time}>{getTimeFromSeconds(totalSeconds)}</div>

        <div className={styles.timer__buttons}>
          <IconButton id="undo" large title="Reset" onClick={onReset}/>

          <IconButton
            id={isPlaying ? "pause" : "play"}
            large
            title={isPlaying ? "Pause" : "Play"}
            onClick={onPlayPause}
          />

          <IconButton id="save" large title="Save" onClick={onSave} disabled={totalSeconds === 0}/>
        </div>
      </div>

      <AuthWrapper isAuthenticated={isAuthenticated}>
        <div className={styles['timer__project-controls']}>
          <Select
            options={projectOptions}
            isSearchable
            placeholder="Choose a project..."
            className={styles['timer__project-select']}
            value={selectedProject}
            onChange={setSelectedProject}
            // isLoading={isLoadingProjects} // Show loading indicator in Select
            // isDisabled={isLoadingProjects} // Disable while loading
            />

          <TextInput placeholder="Name the current task..." value={taskName} onChange={(event) => setTaskName(event.target.value)} />
        </div>
      </AuthWrapper>

      {/* {
        isAuthenticated
        ? <div className={styles['timer__project-controls']}>
          <Select
            options={projectOptions}
            isSearchable
            placeholder="Choose a project..."
            className={styles['timer__project-select']}
            value={selectedProject}
            onChange={setSelectedProject}
            // isLoading={isLoadingProjects} // Show loading indicator in Select
            // isDisabled={isLoadingProjects} // Disable while loading
            />

          <TextInput placeholder="Name the current task..." value={taskName} onChange={(event) => setTaskName(event.target.value)} />
        </div>

        : <p>
            <Link to="/login">Log in</Link> to save your time entries
          </p>
      } */}
    </div>
  );
};
