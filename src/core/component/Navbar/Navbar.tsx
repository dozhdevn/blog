import React from 'react'

import styles from './Navbar.module.scss'
import cn from 'classnames'
import { useDispatch } from 'react-redux'
import { coreActions } from 'core/model/slice/coreSlice'
import { AppLink } from 'components/AppLink'

export interface NavbarProps {
  className?: string
}

export const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const dispatch = useDispatch()

  const handleToggleTheme = () => {
    dispatch(coreActions.toggleTheme())
  }

  return (
    <div className={cn(styles.navbar, className)}>
      <button onClick={handleToggleTheme}>toggle theme</button>
      <div className={styles.links}>
        <AppLink className={styles.mainLink} to='/'>MAIN</AppLink>
        <AppLink to='/about'>ABOUT</AppLink>
      </div>
    </div>
  )
}
