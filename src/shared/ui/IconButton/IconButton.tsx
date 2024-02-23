import React from 'react'
import cn from 'classnames'

import styles from './IconButton.module.scss'

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactElement
}

export const IconButton: React.FC<IconButtonProps> = ({ children: Icon, className, ...props }) => (
  <button {...props} className={cn(styles.iconButton, className)}>
    {Icon}
  </button>
)
