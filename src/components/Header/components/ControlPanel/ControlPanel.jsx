import { Link } from 'react-router-dom';
import { IconButton } from '../../../../ui';
import { useDispatch, useSelector } from 'react-redux';
import { authSelector } from '../../../../selectors';
import styles from './control-panel.module.scss';
import { logout as serverLogout } from '../../../../bff/operations/logout';
import { logout as logoutAction } from '../../../../actions/auth-actions';

export const ControlPanel = () => {
  const {isAuthenticated, user, sessionId} = useSelector(authSelector);
  const dispatch = useDispatch();

  const onLogout = async () => {
    await serverLogout(sessionId);
    dispatch(logoutAction());
  };

  return (
    <div className={styles['control-panel']}>
      {
        isAuthenticated
          ? <>
              <div>
                <button onClick={onLogout} className={styles['text-link']}>Log out</button>
              </div>

              <IconButton
                id="user"
                id2="circle"
                large
                variant="link"
                to="/dashboard"
                title={user.login}
              />
            </>

          : <div>
              <Link to="/login" className={styles['text-link']}>Log in</Link>
              <span>|</span>
              <Link to="/signup" className={styles['text-link']}>Sign up</Link>
            </div>
      }
    </div>
  );
};
