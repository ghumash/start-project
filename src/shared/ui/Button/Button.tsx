import { ButtonHTMLAttributes, FC, memo, ReactNode } from 'react'
import { Button as HeadlessUIButton } from '@headlessui/react'
import clsx from 'clsx'

type ButtonProps = {
  variant?: 'primary' | 'danger'
  size?: 'small' | 'medium' | 'large'
  isLoading?: boolean
  disabled?: boolean
  children: ReactNode
  theme?: 'light' | 'dark'
} & ButtonHTMLAttributes<HTMLButtonElement>

const baseClasses = 'inline-flex items-center justify-center font-medium focus:outline-none focus:ring-2 transition-colors'

const variantClasses = {
  primary: {
    light:
      'bg-light-bg-secondary-static hover:bg-light-bg-secondary-hover text-light-text-static hover:text-light-text-hover focus:ring-dark-bg-secondary-static',
    dark: 'bg-dark-bg-secondary-static hover:bg-dark-bg-secondary-hover text-dark-text-static hover:text-dark-text-hover focus:ring-light-bg-secondary-static',
  },
  danger: {
    light: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-600',
    dark: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-700',
  },
}

const sizeClasses = {
  small: 'px-3 py-2 text-sm',
  medium: 'px-4 py-2 text-base',
  large: 'px-6 py-3 text-lg',
}

export const Button: FC<ButtonProps> = memo(
  ({
    variant = 'primary',
    size = 'medium',
    isLoading = false,
    disabled = false,
    children,
    className,
    theme = 'dark',
    ...props
  }) => {
    const stateClasses = disabled || isLoading ? 'opacity-50 cursor-not-allowed' : ''

    const classes = clsx(baseClasses, variantClasses[variant][theme], sizeClasses[size], stateClasses, className)

    const renderLoadingSpinner = () => (
      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
      </svg>
    )

    return (
      <HeadlessUIButton className={classes} disabled={disabled || isLoading} {...props}>
        {isLoading ? renderLoadingSpinner() : children}
      </HeadlessUIButton>
    )
  },
)
