import clsx from 'clsx'
import styles from './style.module.css'

export const Loader = ({ size = 'small', type }) => {

  return (
    <div className={clsx(type === 'fullPage' ? styles.fullPage : '')}>
      <div className={clsx(styles[size], styles.spinner)} />
    </div>
  )
}
