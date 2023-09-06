import React, { useState } from 'react'
import cn from 'classnames'

import ArrowHorizontal from 'assets/icons/svg/arrow-horizontal.svg'
import { IconButton } from 'components/IconButton'
import { ThemeSwitcher } from '../ThemeSwitcher'
import { LanguageSwitch } from '../LanguageSwitch'

import styles from './Sidebar.module.scss'
import { SidebarLink } from './components/SidebarLink'
import { sidebarLinksList } from './model/items'

export const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false)

  const handleToggleColapsed = () => {
    setCollapsed((prev) => !prev)
  }

  const sidebarLinks = sidebarLinksList.map(({ to, title, icon }) => (
    <SidebarLink
      key={to}
      to={to}
      title={title}
      icon={icon}
      collapsed={collapsed}
    />
  ))

  return (
    <div
      className={cn(styles.sidebar, { [styles.sidebar_collapsed]: collapsed })}
    >
      <div className={styles.sidebar__links}>
        {sidebarLinks}
      </div>

      <IconButton
        onClick={handleToggleColapsed}
        className={cn(
          styles.toggleButtonCollapsed,
          { [styles.toggleButtonCollapsed_collapsed]: collapsed },
        )}
      >
        <ArrowHorizontal />
      </IconButton>
      <div className={styles.sidebar__switchers}>
        <ThemeSwitcher />
        <LanguageSwitch />
      </div>
    </div>
  )
}
