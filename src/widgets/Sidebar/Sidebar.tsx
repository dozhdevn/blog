import React, { useState } from 'react'
import cn from 'classnames'

import ArrowHorizontal from 'shared/assets/icons/svg/arrow-horizontal.svg'
import { IconButton } from 'shared/ui/IconButton'
import { useSelector } from 'react-redux'
import { getIsAuth } from 'entities/User/model/selectors/getIsAuth'
import { Flex } from 'shared/ui/Flex'
import { ThemeSwitcher } from '../ThemeSwitcher'
import { LanguageSwitch } from '../LanguageSwitch'

import styles from './Sidebar.module.scss'
import { SidebarLink } from './components/SidebarLink'
import { useSidebarLinks } from './lib/useSidebarLinks'

export const Sidebar: React.FC = () => {
  const isAuth = useSelector(getIsAuth)
  const [collapsed, setCollapsed] = useState(false)

  const sidebarLinksList = useSidebarLinks()

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
    <Flex
      direction='column'
      justify='between'
      align='stretch'
      className={cn(styles.sidebar, { [styles.sidebar_collapsed]: collapsed })}
    >
      <Flex direction='column' align='stretch' gap={20}>
        {sidebarLinks}
      </Flex>

      <IconButton
        onClick={handleToggleColapsed}
        className={cn(styles.toggleButtonCollapsed, { [styles.toggleButtonCollapsed_collapsed]: collapsed })}
      >
        <ArrowHorizontal />
      </IconButton>
      <Flex justify='center' gap={8} className={styles.sidebar__switchers}>
        <ThemeSwitcher />
        <LanguageSwitch />
      </Flex>
    </Flex>
  )
}
