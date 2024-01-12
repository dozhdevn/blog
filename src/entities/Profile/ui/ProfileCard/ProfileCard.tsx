import React, { memo } from 'react'
import cn from 'classnames'

import { Input } from 'shared/ui/Input'

import { Profile } from 'entities/Profile'

import { Currency, CurrencySelect } from 'entities/Currency'
import { Country, CountrySelect } from 'entities/Country'

import { ProfileErrors } from 'features/EditableProfile'
import { Flex } from 'shared/ui/Flex'
import styles from './ProfileCard.module.scss'

export interface ProfileCardProps {
  profile: Profile | null
  isEditable: boolean
  errors?: ProfileErrors
  onChangeFirstname: (value: string) => void
  onChangeUsername: (value: string) => void
  onChangeLastname: (value: string) => void
  onChangeAvatar: (value: string) => void
  onChangeAge: (value: string) => void
  onChangeCity: (value: string) => void
  onChangeCurrency: (value: Currency) => void
  onChangeCountry: (value: Country) => void
  renderFooter?: () => JSX.Element
  className?: string
}

export const ProfileCard: React.FC<ProfileCardProps> = memo(
  ({
    profile,
    isEditable,
    errors,
    onChangeFirstname,
    onChangeUsername,
    onChangeLastname,
    onChangeAvatar,
    onChangeAge,
    onChangeCity,
    onChangeCurrency,
    onChangeCountry,
    renderFooter,
    className,
  }) => {
    const content = (
      <Flex justify='between' wrap='wrap'>
        <Input
          label='Имя пользователя'
          value={profile?.firstname}
          className={styles.profileCard__field}
          readOnly={!isEditable}
          onChange={onChangeFirstname}
          error={!!errors?.firstname}
          helperText={errors?.firstname}
        />
        <Input
          label='Логин'
          value={profile?.username}
          className={styles.profileCard__field}
          readOnly={!isEditable}
          onChange={onChangeUsername}
          error={!!errors?.username}
          helperText={errors?.username}
        />
        <Input
          label='Фамилия'
          value={profile?.lastname}
          className={styles.profileCard__field}
          readOnly={!isEditable}
          onChange={onChangeLastname}
          error={!!errors?.lastname}
          helperText={errors?.lastname}
        />
        <Input
          label='Аватар'
          value={profile?.avatar}
          className={styles.profileCard__field}
          readOnly={!isEditable}
          onChange={onChangeAvatar}
        />
        <Input
          label='Возраст'
          value={String(profile?.age)}
          className={styles.profileCard__field}
          readOnly={!isEditable}
          onChange={onChangeAge}
        />

        <CurrencySelect
          value={profile?.currency}
          onChange={onChangeCurrency}
          className={styles.profileCard__field}
          disabled={!isEditable}
        />

        <Input
          label='Город'
          value={profile?.city}
          className={styles.profileCard__field}
          readOnly={!isEditable}
          onChange={onChangeCity}
        />
        <CountrySelect
          value={profile?.country}
          className={styles.profileCard__field}
          disabled={!isEditable}
          onChange={onChangeCountry}
        />
      </Flex>
    )

    const footer = renderFooter && renderFooter()

    return (
      <div className={cn(styles.profileCard, className)}>
        {content}
        {footer}
      </div>
    )
  },
)
