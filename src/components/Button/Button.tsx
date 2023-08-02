import cn from 'classnames'
import React from 'react'

import styles from './Button.module.scss'

export type ButtonType = 'clear'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonType
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'clear',
  children,
  className,
  ...props
}) => {
  const buttonClassName = cn(
    styles.button,
    [styles[`button_${variant}`]],
    className
  )

  return (
    <button {...props} className={buttonClassName}>
      {children}
    </button>
  )
}
