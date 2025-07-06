import { IconButton, Button } from '../../ui';
import { Link } from 'react-router-dom';
import styles from './projects-page.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { authSelector, projectsSelector } from '../../selectors';
import { AuthWrapper } from '../../components';
import { getTimeFromSeconds } from '../../utils';
import { useState } from 'react';
import { updateProjectAction } from '../../actions';
import { updateProject, removeProject } from '../../bff/operations';
import { removeProjectAction } from '../../actions';

export const ProjectItem = ({id, name, duration}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);
  const dispatch = useDispatch();

  const onSave = async () => {
    const responseFromUpdatingProject = await updateProject(id, {name: editedName});

    if (responseFromUpdatingProject.error) {
      console.log(responseFromUpdatingProject.error);
    } else {
      setIsEditing(false);
      dispatch(updateProjectAction(responseFromUpdatingProject.res));
    }
  }

  const onCancel = () => {
    setEditedName(name);
    setIsEditing(false);
  }

  const onDelete = async () => {
    const confirmed = confirm(`Are you sure you want to delete project "${name}"`);

    if (confirmed) {
      const responseFromRemovingProject = await removeProject(id);

      if (responseFromRemovingProject.error) {
        console.log(responseFromRemovingProject.error);
      } else {
        dispatch(removeProjectAction(id));
      }
    }
  }

  return (
    <div className="list__item">
      <div className="list__item-info">
        {
          isEditing ?
            <input
              className="list__item-input"
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
            />
          :
            <Link
              to={`/project/${id}`}
              className="text-link"
            >{name}</Link>
        }

        <div>{getTimeFromSeconds(duration)}</div>
      </div>
      <div className="list__item-buttons">
        {isEditing ? (
          <>
            <IconButton id="check" size="md" title="Save" onClick={onSave} />
            <IconButton id="times" size="md" title="Cancel" onClick={onCancel} />
          </>
        ) : (
          <>
            <IconButton id="edit" size="md" title="Edit" onClick={() => setIsEditing(true)} />
            <IconButton id="trash-o" size="md" title="Delete" onClick={() => onDelete(id)} />
          </>
        )}
      </div>
    </div>
  );
};

export const ProjectsPage = () => {
  const {isAuthenticated} = useSelector(authSelector);
  const projects = useSelector(projectsSelector);

  return (
    <main className={`page ${styles['projects-page']}`}>
      <div className="container page__container">
        <AuthWrapper isAuthenticated={isAuthenticated} message="to see your projects">

          <div className={styles['projects-page__top']}>
            <h1 className="h1">Projects</h1>
            <Button icon="plus">Create</Button>
          </div>
          {isAuthenticated && (
            <div className="list">
              {
                projects.map(({id, name, duration}) => (
                  <ProjectItem id={id} name={name} duration={duration} key={id} />
                ))
              }
            </div>
          )}
        </AuthWrapper>
      </div>
    </main>
  );
};
