import React from 'react'

import cn from 'classnames'

import styles from './Navbar.module.scss'

export interface NavbarProps {
  className?: string
}

export const Navbar: React.FC<NavbarProps> = ({ className }) => (
  <div className={cn(styles.navbar, className)} />
)
