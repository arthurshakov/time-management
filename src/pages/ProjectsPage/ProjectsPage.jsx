import { IconButton } from '../../ui';
import styles from './projects-page.module.scss';

export const ProjectsPage = () => {
  const projectList = [
    {
      id: '001',
      name: 'Project A',
      taskIds: [],
    },
    {
      id: '002',
      name: 'Project B',
      taskIds: [],
    },
  ];

  return (
    <div className={`page ${styles['projects-page']}`}>
      <div className="container page__container">
        <h1 className="h1">Projects</h1>
        <div className={styles.project__list}>
          {
            projectList.map(({id, name}) => (
              <div className={styles.project} key={id}>
                <h2 className={styles.project__name} key={id}>{name}</h2>
                <div className={styles.project__buttons}>
                  <IconButton id="edit" size="md" title="Edit" />
                  <IconButton id="trash-o" size="md" title="Delete" />
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};
