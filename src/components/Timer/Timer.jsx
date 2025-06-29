import { useEffect, useRef, useState } from 'react';
import { IconButton, TextInput, Select } from '../../ui';
import { saveTimeEntry, getProjects } from '../../bff/api';
// import { useAuth } from '../../hooks';
import styles from './timer.module.scss';

export const TimerBlock = () => {
  const [projectOptions, setProjectOptions] = useState([]);
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [taskName, setTaskName] = useState('');
  const [isLoadingProjects, setIsLoadingProjects] = useState(false);
  // const {user, loading: authLoading} = useAuth();
  const intervalRef = useRef(null);

  // if (authLoading) {
  //   return <div>Loading auth...</div>;
  // }

  // if (!user) {
  //   return <div>Please login to use the timer</div>;
  // }

  const hours = Math.floor(totalSeconds / 3600).toString().padStart(2, '0');
  const minutes = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, '0');
  const seconds = Math.floor(totalSeconds % 60).toString().padStart(2, '0');

  // Fetch projects on component mount
  useEffect(() => {
    const fetchProjects = async () => {
      setIsLoadingProjects(true);

      try {
        const projects = await getProjects();

        // Transforming projects from backend to select options format
        const options = projects.map(project => ({
          value: project.id,
          label: project.name,
        }));

        setProjectOptions(options);
      } catch (error) {
        console.error('Failed to load projects:', error);
      } finally {
        setIsLoadingProjects(false);
      }
    }

    fetchProjects();
  }, [])

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }
  }, []);

  const onPlayPause = () => {
    if (isPlaying) {
      // Pause the timer
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    } else {
      // Start the timer
      intervalRef.current = setInterval(() => {
        setTotalSeconds(prev => prev + 1);
      }, 1000);
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
    console.log('onSave');
    if (!selectedProject) {
      alert('Please select a project');
      return;
    }

    if (!taskName.trim()) {
      alert('Please enter a task name');
      return;
    }

    const entry = {
      projectId: selectedProject.value,
      projectName: selectedProject.label,
      taskName: taskName.trim(),
      duration: totalSeconds,
      date: new Date().toISOString()
    };

    try {
      const savedEntry = await saveTimeEntry(entry);
      console.log('Saved entry:', savedEntry);
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
        <div className={styles.timer__time}>{hours}:{minutes}:{seconds}</div>

        <div className={styles.timer__buttons}>
          <IconButton id="undo" large title="Reset" onClick={onReset}/>

          <IconButton
            id={isPlaying ? "pause" : "play"}
            large
            title={isPlaying ? "Pause" : "Play"}
            onClick={onPlayPause}
          />

          <IconButton id="save" large title="Save" onClick={onSave}/>
        </div>
      </div>

      <div className={styles['timer__project-controls']}>
        <Select
          options={projectOptions}
          isSearchable
          placeholder="Choose a project..."
          className={styles['timer__project-select']}
          value={selectedProject}
          onChange={setSelectedProject}
          isLoading={isLoadingProjects} // Show loading indicator in Select
          isDisabled={isLoadingProjects} // Disable while loading
        />

        <TextInput placeholder="Name the current task..." value={taskName} onChange={(event) => setTaskName(event.target.value)} />
      </div>
    </div>
  );
};
