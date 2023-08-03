import React from 'react'

import cn from 'classnames'
import { AppLink } from 'components/AppLink'

import styles from './Navbar.module.scss'

export interface NavbarProps {
  className?: string
}

export const Navbar: React.FC<NavbarProps> = ({ className }) => {
  return (
    <div className={cn(styles.navbar, className)}>
      <div className={styles.links}>
        <AppLink className={styles.mainLink} to='/'>
          MAIN
        </AppLink>
        <AppLink to='/about'>ABOUT</AppLink>
      </div>
    </div>
  )
}