import { IconButton } from '../../ui';
import styles from './timer.module.scss';

export const TimerBlock = () => {
  return (
    <div className={styles.timer__block}>
      <div className={styles.timer}>
        <div className={styles.timer__time}>00:00:00</div>
        <div className={styles.timer__buttons}>
          <IconButton id="play" />
          <IconButton id="stop" />
          <IconButton id="save" />
        </div>
      </div>

      <div className={styles.timer__choice}>

      </div>
    </div>
  );
};
