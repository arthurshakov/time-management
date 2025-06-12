import styles from './homepage.module.scss';

export const Homepage = () => {
  return (
    <div className={`page ${styles.homepage}`}>
      <div className="container">We are home</div>
    </div>
  );
};
