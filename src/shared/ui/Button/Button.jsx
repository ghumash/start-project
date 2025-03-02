import { memo } from 'react'
import clsx from 'clsx'
import styles from './style.module.css'

export const Button = memo(({
    isLoading = false,
    disabled = false,
    children,
    className,
    ...props
  }) => {
  const classes = clsx(styles.button, disabled && styles.disabled, className)

  return (
    <button className={classes} disabled={disabled || isLoading} {...props}>
      {isLoading ? <span className={styles.spinner} /> : children}
    </button>
  )
})
