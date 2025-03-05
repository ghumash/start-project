import clsx from 'clsx'
import styles from './style.module.css'

export const Input = ({ className, isInvalid = false, ...props }) => {
  return (
    <input
      className={clsx(styles.input, className, { [styles.invalid]: isInvalid })}
      {...props}
    />
  )
}
