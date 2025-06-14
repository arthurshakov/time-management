import { IconButton, TextInput, Select } from '../../ui';
// import Select from 'react-select';
import styles from './timer.module.scss';

export const TimerBlock = () => {
    const projectOptions = [
    {
      value: 'project-a',
      label: 'Project A',
    },
    {
      value: 'project-b',
      label: 'Project B',
    }
  ];

  return (
    <div className={styles.timer__block}>
      <div className={styles.timer}>
        <div className={styles.timer__time}>00:00:00</div>
        <div className={styles.timer__buttons}>
          <IconButton id="play" />
          <IconButton id="stop" />
          <IconButton id="undo" />
          <IconButton id="save" />
        </div>
      </div>

      <div className={styles['timer__project-controls']}>
        <Select
          options={projectOptions}
          isSearchable
          placeholder="Choose a project..."
          className={styles['timer__project-select']}
        />

        <TextInput placeholder="Name the current task..." />
      </div>
    </div>
  );
};
