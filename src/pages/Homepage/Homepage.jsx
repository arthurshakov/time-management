import { TimerBlock } from '../../components';
import styles from './homepage.module.scss';

export const Homepage = () => {
  return (
    <div className={`page ${styles.homepage}`}>
      <div className="container">
        <h1 className="h1">Rule&nbsp;#1 of time&#8209;tracking:<br />you have to&nbsp;track&nbsp;time.</h1>
        <TimerBlock />
      </div>
    </div>
  );
};
