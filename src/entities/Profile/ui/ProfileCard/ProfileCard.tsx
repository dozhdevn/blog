import React, { memo } from 'react'
import cn from 'classnames'

import { Input } from 'components/Input'

import { Profile } from 'entities/Profile'

import styles from './ProfileCard.module.scss'

export interface ProfileCardProps {
  profile: Profile | null
  isEditable: boolean
  renderFooter?: () => JSX.Element
  className?: string
}

export const ProfileCard: React.FC<ProfileCardProps> = memo(({
  profile, isEditable, renderFooter, className,
}) => {
  const content = (
    <div className={styles.profileCard__fields}>
      <Input value={profile?.firstname} className={styles.profileCard__field} readOnly={!isEditable} />
      <Input value={profile?.username} className={styles.profileCard__field} readOnly={!isEditable} />
      <Input value={profile?.lastname} className={styles.profileCard__field} readOnly={!isEditable} />
      <Input value={profile?.avatar} className={styles.profileCard__field} readOnly={!isEditable} />
      <Input value={String(profile?.age)} className={styles.profileCard__field} readOnly={!isEditable} />
      <Input value={profile?.currency} className={styles.profileCard__field} readOnly={!isEditable} />
      <Input value={profile?.city} className={styles.profileCard__field} readOnly={!isEditable} />
      <Input value={profile?.country} className={styles.profileCard__field} readOnly={!isEditable} />
    </div>
  )

  const footer = renderFooter && renderFooter()

  return (
    <div className={cn(styles.profileCard, className)}>
      {content}
      {footer}
    </div>
  )
})
