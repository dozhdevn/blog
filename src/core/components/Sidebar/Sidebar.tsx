import React, { useState } from 'react'
import cn from 'classnames'

import { ThemeSwitcher } from '../ThemeSwitcher'
import { LanguageSwitch } from '../LanguageSwitch'

import styles from './Sidebar.module.scss'

export const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false)

  const handleToggleColapsed = () => {
    setCollapsed(prev => !prev)
  }

  return (
    <div
      className={cn(styles.sidebar, { [styles.sidebar_collapsed]: collapsed })}
    >
      <button onClick={handleToggleColapsed}>collapsed</button>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LanguageSwitch />
      </div>
    </div>
  )
}
