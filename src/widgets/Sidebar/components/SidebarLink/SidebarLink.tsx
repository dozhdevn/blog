import React, { memo } from 'react'
import cn from 'classnames'
import { AppLink } from 'shared/ui/AppLink'
import { Flex } from 'shared/ui/Flex'

import styles from './SudebarLink.module.scss'

export interface SidebarLinkProps {
  to: string
  title: string
  icon?: React.VFC<React.SVGProps<SVGSVGElement>>
  collapsed?: boolean
  className?: string
}

export const SidebarLink: React.FC<SidebarLinkProps> = memo(({
  to, title, icon: Icon, collapsed, className,
}) => (
  <Flex
    as={AppLink}
    className={cn(styles.sidebarLink, { [styles.sidebarLink_collapsed]: collapsed }, className)}
    activeClassName={styles.sidebarLink_active}
    to={to}
    exact
  >
    {Icon && <Icon className={styles.sidebarLink__icon} />}
    <span className={styles.sidebarLink__title}>{title}</span>
  </Flex>
))
