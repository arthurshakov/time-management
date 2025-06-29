import { Link } from 'react-router-dom';
import { IconButton } from '../../../../ui';
import styles from './control-panel.module.scss';

export const ControlPanel = () => {
  return (
    <div className={styles['control-panel']}>
      <div>
        <Link to="/login" className={styles['text-link']}>Log in</Link>
        <span>|</span>
        <Link to="/login" className={styles['text-link']}>Sign up</Link>
      </div>

      <IconButton
        id="user"
        id2="circle"
        large
        variant="link"
        to="/dashboard"
        title="Dashboard"
      />
    </div>
  );
};
