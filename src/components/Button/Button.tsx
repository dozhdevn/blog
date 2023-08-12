import cn from 'classnames'
import React from 'react'

import styles from './Button.module.scss'

export type ButtonType = 'clear'

export type ButtonSize = 'medium' | 'large'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonType
  size?: ButtonSize
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'clear',
  children,
  className,
  size = 'medium',
  ...props
}) => {
  const buttonClassName = cn(
    styles.button,
    [styles[`button_${variant}`]],
    [styles[`button_${size}`]],
    className,
  )

  return (
    <button {...props} className={buttonClassName}>
      {children}
    </button>
  )
}
