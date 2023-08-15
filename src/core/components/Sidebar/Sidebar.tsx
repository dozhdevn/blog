import React, { useState } from 'react'
import cn from 'classnames'

import ArrowHorizontal from 'assets/icons/svg/arrow-horizontal.svg'
import HomeIcon from 'assets/icons/svg/home.svg'
import AboutIcon from 'assets/icons/svg/about.svg'
import { IconButton } from 'components/IconButton'
import { RoutePath } from 'routes/model/routePaths'
import { ThemeSwitcher } from '../ThemeSwitcher'
import { LanguageSwitch } from '../LanguageSwitch'

import styles from './Sidebar.module.scss'
import { SidebarLink } from './components/SidebarLink'

export const Sidebar: React.FC = () => {
  const links: {to: RoutePath, title: string, icon: React.VFC<React.SVGProps<SVGSVGElement>>}[] = [
    {
      to: RoutePath.MAIN,
      title: 'Главная',
      icon: HomeIcon,
    },
    {
      to: RoutePath.ABOUT,
      title: 'О сайте',
      icon: AboutIcon,
    },
  ]

  const [collapsed, setCollapsed] = useState(false)

  const handleToggleColapsed = () => {
    setCollapsed((prev) => !prev)
  }

  return (
    <div
      className={cn(styles.sidebar, { [styles.sidebar_collapsed]: collapsed })}
    >
      <div className={styles.sidebar__links}>
        {links.map((link) => (
          <SidebarLink
            key={link.to}
            to={link.to}
            title={link.title}
            icon={link.icon}
            collapsed={collapsed}
          />
        ))}
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
