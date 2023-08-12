import React from 'react'
import cn from 'classnames'

import { AppLink } from 'components/AppLink'
import { RoutePath } from 'routes/model/routePaths'

import styles from './SudebarLink.module.scss'

export interface SidebarLinkProps {
  to: RoutePath
  title: string
  icon?: React.VFC<React.SVGProps<SVGSVGElement>>
  collapsed?: boolean
  className?: string
}

export const SidebarLink:React.FC<SidebarLinkProps> = ({
  to, title, icon: Icon, collapsed, className,
}) => (
  <AppLink
    className={cn(
      styles.sidebarLink,
      { [styles.sidebarLink_collapsed]: collapsed },
      className,
    )}
    activeClassName={styles.sidebarLink_active}
    to={to}
    exact
  >
    <Icon className={styles.sidebarLink__icon} />
    <span className={styles.sidebarLink__title}>
      {title}
    </span>
  </AppLink>
)
