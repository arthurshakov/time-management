import styles from './project-page.module.scss';

export const ProjectPage = () => {
  return (
    <div className={`page ${styles['project-page']}`}>
      <div className="container page__container">
        <h1 className="h1">Project Name</h1>
      </div>
    </div>
  )
}
