import { FC, memo, ReactNode } from 'react'
import { ButtonColor } from '@/shared/types'

interface ButtonProps {
  color?: ButtonColor
  className?: string
  children?: ReactNode
  onClick?: () => void
}

export const Button: FC<ButtonProps> = memo((props) => {
  const { className, children, onClick, color = ButtonColor.INFO, ...otherProps } = props

  return (
    <button
      onClick={onClick}
      className={`text-white font-bold py-2 px-4 transition-all ${className ? className : ''} ${color}`}
      {...otherProps}
    >
      {children}
    </button>
  )
})
