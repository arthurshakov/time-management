import { Link } from 'react-router-dom';
import styles from './button.module.scss';

const IconButtonInner = ({id, id2 = 'square'}) => {
  return (
    <span className="fa-stack fa-lg">
      <i className={`fa fa-${id2} fa-stack-2x`} aria-hidden="true"></i>
      <i className={`fa fa-${id} fa-stack-1x fa-inverse`} aria-hidden="true"></i>
    </span>
  )
}

export const IconButton = ({id, id2 = 'square', variant = 'button', to = ''}) => {

  return (
    <>
      {/* Button */}
      {variant === 'button' && (
          <button type="button" className={styles['icon-button']}>
            <IconButtonInner id={id} id2={id2} />
          </button>
      )}

      {/* Link */}
      {variant === 'link' && (
        <Link to={to} className={styles['icon-button']}>
          <IconButtonInner id={id} id2={id2} />
        </Link>
      )}
    </>
  )
};
