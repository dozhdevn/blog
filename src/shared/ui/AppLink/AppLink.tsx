import React from 'react'
import { NavLink, NavLinkProps } from 'react-router-dom'
import cn from 'classnames'

import styles from './AppLink.module.scss'

interface AppLinkProps extends NavLinkProps {
  className?: string
}

export const AppLink: React.FC<AppLinkProps> = ({ children, className, ...props }) => (
  <NavLink {...props} className={cn(styles.appLink, className)}>
    {children}
  </NavLink>
)
