import React from 'react'
import ToggleTheme from 'assets/icons/svg/theme-toggle.svg'
import { useDispatch } from 'react-redux'
import { coreActions } from 'core/model/slice/coreSlice'
import cn from 'classnames'

import { IconButton } from 'components/IconButton'
import styles from './ThemeSwitcher.module.scss'

export interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ className }) => {
  const dispatch = useDispatch()

  const handleToggleTheme = () => {
    dispatch(coreActions.toggleTheme())
  }

  return (
    <IconButton
      onClick={handleToggleTheme}
      className={cn(styles.themeSwitcher, className)}
    >
      <ToggleTheme />
    </IconButton>
  )
}
