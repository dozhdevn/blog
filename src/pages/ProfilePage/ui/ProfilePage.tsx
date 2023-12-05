import React, { useCallback, useEffect, useMemo } from 'react'

import { ProfileCard, fetchProfile, profileReducer } from 'entities/Profile'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useSelector } from 'react-redux'

import { Avatar } from 'shared/ui/Avatar'
import { getProfileLoading } from 'entities/Profile/model/selectors/getProfileLoading'
import { Loader } from 'shared/ui/Loader'
import { DynamicModuleLoader } from 'widgets/layouts/DynamicModuleLoader'
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError'
import { Typography } from 'shared/ui/Typography'
import { getIsEditableProfile } from 'features/EditableProfile/model/selectors/getIsEditableProfile'
import { editableProfileActions, editableProfileReducer } from 'features/EditableProfile'
import { getProfileForm } from 'features/EditableProfile/model/selectors/getProfileForm'
import { getLoadingEditPlayer } from 'features/EditableProfile/model/selectors/getLoadingEditPlayer'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { getEditProfileErrors } from 'features/EditableProfile/model/selectors/getEditProfileErrors'
import { useParams } from 'react-router-dom'
import { ProfilePageFooter } from './ProfilePageFooter'

import styles from './ProfilePage.module.scss'

const config = {
  reducers: {
    profile: profileReducer,
    editProfile: editableProfileReducer,
  },
}

const ProfilePage: React.FC = () => {
  const dispatch = useAppDispatch()
  const profileFormData = useSelector(getProfileForm)
  const profileLoading = useSelector(getProfileLoading)
  const prifileEditLoading = useSelector(getLoadingEditPlayer)
  const profileError = useSelector(getProfileError)
  const isEditableProfile = useSelector(getIsEditableProfile)
  const editProfileErrors = useSelector(getEditProfileErrors)

  const { id } = useParams<{ id: string }>()

  useEffect(() => {
    if (id) {
      dispatch(fetchProfile(id))
    }
  }, [dispatch, id])

  const onChangeFirstname = useCallback((value: string) => {
    dispatch(editableProfileActions.updateProfileForm({ firstname: value }))
  }, [])

  const onChangeUsername = useCallback((value: string) => {
    dispatch(editableProfileActions.updateProfileForm({ username: value }))
  }, [])

  const onChangeLastname = useCallback((value: string) => {
    dispatch(editableProfileActions.updateProfileForm({ lastname: value }))
  }, [])

  const onChangeAvatar = useCallback((value: string) => {
    dispatch(editableProfileActions.updateProfileForm({ avatar: value }))
  }, [])

  const onChangeAge = useCallback((value: string) => {
    dispatch(editableProfileActions.updateProfileForm({ age: Number(value?.replace(/\D/gi, '') || 0) }))
  }, [])

  const onChangeCity = useCallback((value: string) => {
    dispatch(editableProfileActions.updateProfileForm({ city: value }))
  }, [])

  const onChangeCurrency = useCallback((value: Currency) => {
    dispatch(editableProfileActions.updateProfileForm({ currency: value }))
  }, [])

  const onChangeCountry = useCallback((value: Country) => {
    dispatch(editableProfileActions.updateProfileForm({ country: value }))
  }, [])

  const renderContent = useMemo(() => {
    if (profileLoading || prifileEditLoading) {
      return <Loader className={styles.profilePage__loader} />
    }
    if (profileError || editProfileErrors?.response) {
      return (
        <>
          <Typography color='error' variant='title'>
            Произошла ошибка
          </Typography>
          <Typography color='error' variant='subTitle'>
            Попробуйте перезагрузить страницу
          </Typography>
        </>
      )
    }
    return (
      <>
        <Avatar size={128} src={profileFormData?.avatar} />
        <ProfileCard
          profile={profileFormData}
          renderFooter={ProfilePageFooter}
          isEditable={isEditableProfile}
          errors={editProfileErrors}
          onChangeFirstname={onChangeFirstname}
          onChangeUsername={onChangeUsername}
          onChangeLastname={onChangeLastname}
          onChangeAvatar={onChangeAvatar}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
        />
      </>
    )
  }, [
    profileLoading,
    prifileEditLoading,
    profileError,
    editProfileErrors,
    profileFormData,
    isEditableProfile,
    onChangeFirstname,
    onChangeUsername,
    onChangeLastname,
    onChangeAvatar,
    onChangeAge,
    onChangeCity,
    onChangeCurrency,
    onChangeCountry,
  ])

  return (
    <DynamicModuleLoader {...config}>
      <div className={styles.profilePage}>{renderContent}</div>
    </DynamicModuleLoader>
  )
}

export default ProfilePage
