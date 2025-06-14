import styles from './button.module.scss';

export const IconButton = ({id}) => {
  return (
    <button type="button" className={styles['icon-button']}>
      <span class="fa-stack fa-lg">
        <i class="fa fa-square fa-stack-2x" aria-hidden="true"></i>
        <i class={`fa fa-${id} fa-stack-1x fa-inverse`} aria-hidden="true"></i>
      </span>
    </button>
  )
};
