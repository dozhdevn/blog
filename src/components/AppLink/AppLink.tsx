import React from 'react'
import { NavLink, NavLinkProps } from 'react-router-dom'

import styles from './AppLink.module.scss'
import cn from 'classnames'

interface AppLinkProps extends NavLinkProps {}

export const AppLink: React.FC<AppLinkProps> = ({
  children,
  ...props
}) => {
  return (
    <NavLink {...props} className={cn(styles.appLink, props.className)}>
      {children}
    </NavLink>
  )
}
