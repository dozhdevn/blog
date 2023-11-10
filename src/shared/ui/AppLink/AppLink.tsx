import React from 'react'
import { NavLink, NavLinkProps } from 'react-router-dom'

import cn from 'classnames'
import styles from './AppLink.module.scss'

interface AppLinkProps extends NavLinkProps {}

export const AppLink: React.FC<AppLinkProps> = ({
  children,
  ...props
}) => (
  <NavLink {...props} className={cn(styles.appLink, props.className)}>
    {children}
  </NavLink>
)
