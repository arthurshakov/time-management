import { Link } from 'react-router-dom';
import styles from './control-panel.module.scss';

export const ControlPanel = () => {
  return (
    <div className={styles['control-panel']}>
      <div>
        <Link to="/login" className={styles['text-link']}>Log in</Link>
        <span>&nbsp;|&nbsp;</span>
        <Link to="/login" className={styles['text-link']}>Sign up</Link>
      </div>

      <Link to="/dashboard" className={styles['icon-link']}>
        <span class="fa-stack fa-lg">
          <i class="fa fa-circle fa-stack-2x"></i>
          <i class="fa fa-user fa-stack-1x fa-inverse"></i>
        </span>
      </Link>
    </div>
  );
};
