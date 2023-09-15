import { Currency } from 'constants/currency'
import React, { memo } from 'react'
import cn from 'classnames'

import { Input } from 'components/Input'

import { Profile } from 'entities/Profile'

import Select from 'components/Select'
import styles from './ProfileCard.module.scss'

const currencyOptions = Object.entries(Currency).map(([_, value]) => ({ label: value, value }))

export interface ProfileCardProps {
  profile: Profile | null
  isEditable: boolean
  onChangeFirstname: (value: string) => void
  onChangeUsername: (value: string) => void
  onChangeLastname: (value: string) => void
  onChangeAvatar: (value: string) => void
  onChangeAge: (value: string) => void
  onChangeCity: (value: string) => void
  onChangeCurrency: (value: Currency) => void
  renderFooter?: () => JSX.Element
  className?: string
}

export const ProfileCard: React.FC<ProfileCardProps> = memo(({
  profile,
  isEditable,
  onChangeFirstname,
  onChangeUsername,
  onChangeLastname,
  onChangeAvatar,
  onChangeAge,
  onChangeCity,
  onChangeCurrency,
  renderFooter,
  className,
}) => {
  const content = (
    <div className={styles.profileCard__fields}>
      <Input
        value={profile?.firstname}
        className={styles.profileCard__field}
        readOnly={!isEditable}
        onChange={onChangeFirstname}
      />
      <Input
        value={profile?.username}
        className={styles.profileCard__field}
        readOnly={!isEditable}
        onChange={onChangeUsername}
      />
      <Input
        value={profile?.lastname}
        className={styles.profileCard__field}
        readOnly={!isEditable}
        onChange={onChangeLastname}
      />
      <Input
        value={profile?.avatar}
        className={styles.profileCard__field}
        readOnly={!isEditable}
        onChange={onChangeAvatar}
      />
      <Input
        value={String(profile?.age)}
        className={styles.profileCard__field}
        readOnly={!isEditable}
        onChange={onChangeAge}
      />

      <Select
        value={profile?.currency}
        options={currencyOptions}
        onChange={onChangeCurrency}
        className={styles.profileCard__field}
        disabled={!isEditable}
      />

      <Input
        value={profile?.city}
        className={styles.profileCard__field}
        readOnly={!isEditable}
        onChange={onChangeCity}
      />
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
