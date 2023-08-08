import React from 'react'

import cn from 'classnames'
import { AppLink } from 'components/AppLink'

import styles from './Navbar.module.scss'

export interface NavbarProps {
  className?: string
}

export const Navbar: React.FC<NavbarProps> = ({ className }) => (
  <div className={cn(styles.navbar, className)}>
    <div className={styles.links}>
      <AppLink className={styles.mainLink} to='/'>
        1
      </AppLink>
      <AppLink to='/about'>1</AppLink>
    </div>
  </div>
)
