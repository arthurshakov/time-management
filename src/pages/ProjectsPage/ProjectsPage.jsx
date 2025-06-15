import { IconButton, Button } from '../../ui';
import { Link } from 'react-router-dom';
import styles from './projects-page.module.scss';

export const ProjectsPage = () => {
  const projectList = [
    {
      id: '001',
      name: 'Project A',
      totalTime: '00:00:00',
      taskIds: [],
    },
    {
      id: '002',
      name: 'Project B',
      totalTime: '00:00:00',
      taskIds: [],
    },
  ];

  return (
    <main className={`page ${styles['projects-page']}`}>
      <div className="container page__container">
        <div className={styles['projects-page__top']}>
          <h1 className="h1">Projects</h1>
          <Button icon="plus">Create</Button>
        </div>
        <div className={styles.project__list}>
          {
            projectList.map(({id, name, totalTime}) => (
              <div className={styles.project} key={id}>
                <div className={styles.project__info}>
                  <Link to="/project/" className="text-link">{name}</Link>
                  <div className={styles['project__total-time']}>{totalTime}</div>
                </div>
                <div className={styles.project__buttons}>
                  <IconButton id="edit" size="md" title="Edit" />
                  <IconButton id="trash-o" size="md" title="Delete" />
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </main>
  );
};
