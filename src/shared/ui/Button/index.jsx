import clsx from 'clsx'
import styles from './style.module.css'
import { Loader } from '@/shared/ui'

export const Button = ({ isLoading = false, disabled = false, text, children, className, ...props }) => {

  return (
    <button
      className={clsx(styles.button, className)}
      disabled={disabled || isLoading}
      {...props}
    >
      {text}
      {isLoading ? <Loader position="center" /> : children}
    </button>
  )
}
