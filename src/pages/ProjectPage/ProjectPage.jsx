import styles from './project-page.module.scss';
import { Button, IconButton } from '../../ui';

export const ProjectPage = () => {
  const taskList = [
    {
      id: '001',
      name: 'Task A',
      time: '00:00:00',
    },
    {
      id: '002',
      name: 'task B',
      time: '00:00:00',
    },
  ];

  return (
    <div className={`page ${styles['project-page']}`}>
      <div className="container page__container">
        <h1 className="h1">Project Name</h1>

        <div className={styles['task__list-top']}>
          <h2 className="h2">Tasks</h2>

          <Button icon="plus">Create</Button>
        </div>

        <div className="list">
          {
            taskList.map(({id, name, time}) => (
              <div className="list__item" key={id}>
                <div className="list__item-info">
                  <div to="/project/" className="text-div">{name}</div>
                  <div className={styles['project__total-time']}>{time}</div>
                </div>
                <div className="list__item-buttons">
                  <IconButton id="edit" size="md" title="Edit" />
                  <IconButton id="trash-o" size="md" title="Delete" />
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
