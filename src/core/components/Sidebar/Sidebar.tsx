import React, { useState } from 'react'
import cn from 'classnames'

import { ThemeSwitcher } from '../ThemeSwitcher'

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
      <ThemeSwitcher className={styles.toggleSwitcher} />
    </div>
  )
}
