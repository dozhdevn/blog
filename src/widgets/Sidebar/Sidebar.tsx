import React, { useState } from 'react'
import cn from 'classnames'

import ArrowHorizontal from 'shared/assets/icons/svg/arrow-horizontal.svg'
import { IconButton } from 'shared/ui/IconButton'
import { useSelector } from 'react-redux'
import { getIsAuth } from 'entities/User/model/selectors/getIsAuth'
import { ThemeSwitcher } from '../ThemeSwitcher'
import { LanguageSwitch } from '../LanguageSwitch'

import styles from './Sidebar.module.scss'
import { SidebarLink } from './components/SidebarLink'
import { sidebarLinksList } from './model/items'

export const Sidebar: React.FC = () => {
  const isAuth = useSelector(getIsAuth)
  const [collapsed, setCollapsed] = useState(false)

  const handleToggleColapsed = () => {
    setCollapsed((prev) => !prev)
  }

  const sidebarLinks = sidebarLinksList.map(({
    to, title, icon, visibleOnlyAuth,
  }) => {
    if (visibleOnlyAuth && !isAuth) {
      return null
    }

    return <SidebarLink key={to} to={to} title={title} icon={icon} collapsed={collapsed} />
  })

  return (
    <div className={cn(styles.sidebar, { [styles.sidebar_collapsed]: collapsed })}>
      <div className={styles.sidebar__links}>{sidebarLinks}</div>

      <IconButton
        onClick={handleToggleColapsed}
        className={cn(styles.toggleButtonCollapsed, { [styles.toggleButtonCollapsed_collapsed]: collapsed })}
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
