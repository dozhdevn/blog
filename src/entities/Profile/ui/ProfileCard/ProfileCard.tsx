import React, { memo } from 'react'
import cn from 'classnames'

import { Button } from 'components/Button'
import { Input } from 'components/Input'

import { Profile } from 'entities/Profile'
import styles from './ProfileCard.module.scss'

export interface ProfileCardProps {
  profile: Profile | null
  className?: string
}

export const ProfileCard: React.FC<ProfileCardProps> = memo(({ profile, className }) => {
  const content = (
    <>
      <div className={styles.profileCard__fields}>
        <Input value={profile?.firstname} className={styles.profileCard__field} readOnly />
        <Input value={profile?.username} className={styles.profileCard__field} />
        <Input value={profile?.lastname} className={styles.profileCard__field} />
        <Input value={profile?.avatar} className={styles.profileCard__field} />
        <Input value={String(profile?.age)} className={styles.profileCard__field} />
        <Input value={profile?.currency} className={styles.profileCard__field} />
        <Input value={profile?.city} className={styles.profileCard__field} />
        <Input value={profile?.country} className={styles.profileCard__field} />
      </div>
      <Button>Редактировать</Button>
    </>
  )

  return (
    <div className={cn(styles.profileCard, className)}>
      {content}
    </div>
  )
})
