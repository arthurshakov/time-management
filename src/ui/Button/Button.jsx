import { Link } from 'react-router-dom';
import styles from './button.module.scss';

const IconButtonInner = ({id, id2, large}) => {
  return (
    <span className={`fa-stack ${large !== undefined ? 'fa-lg' : ''}`}>
      <i className={`fa fa-${id2} fa-stack-2x`} aria-hidden="true"></i>
      <i className={`fa fa-${id} fa-stack-1x fa-inverse`} aria-hidden="true"></i>
    </span>
  )
}

export const IconButton = ({id, id2 = 'square', large, variant = 'button', to = '', ...props}) => {
  return (
    <>
      {/* Button */}
      {variant === 'button' && (
        <button type="button" className={styles['icon-button']} {...props}>
          <IconButtonInner id={id} id2={id2} large={large} />
        </button>
      )}

      {/* Link */}
      {variant === 'link' && (
        <Link to={to} className={styles['icon-button']} {...props}>
          <IconButtonInner id={id} id2={id2} large={large} />
        </Link>
      )}
    </>
  )
};
