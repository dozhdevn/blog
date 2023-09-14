import React, { useCallback, useEffect, useMemo } from 'react'

import { ProfileCard, fetchProfile, profileReducer } from 'entities/Profile'
import { getAuthData } from 'entities/User'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { useSelector } from 'react-redux'

import { Avatar } from 'components/Avatar'
import { getProfileLoading } from 'entities/Profile/model/selectors/getProfileLoading'
import { Loader } from 'components/Loader'
import { DynamicModuleLoader } from 'core/layouts/DynamicModuleLoader'
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError'
import { Typography } from 'components/Typography'
import { getIsEditableProfile } from 'features/EditableProfile/model/selectors/getIsEditableProfile'
import { editableProfileActions, editableProfileReducer } from 'features/EditableProfile'
import { getProfileForm } from 'features/EditableProfile/model/selectors/getProfileForm'
import { getLoadingEditPlayer } from 'features/EditableProfile/model/selectors/getLoadingEditPlayer'
import styles from './ProfilePage.module.scss'
import { ProfilePageFooter } from './ProfilePageFooter'

const config = {
  reducers: {
    profile: profileReducer,
    editProfile: editableProfileReducer,
  },
}

const ProfilePage: React.FC = () => {
  const dispatch = useAppDispatch()
  const user = useSelector(getAuthData)
  const profileFormData = useSelector(getProfileForm)
  const profileLoading = useSelector(getProfileLoading)
  const prifileEditLoading = useSelector(getLoadingEditPlayer)
  const profileError = useSelector(getProfileError)
  const isEditableProfile = useSelector(getIsEditableProfile)

  useEffect(() => {
    if (user) {
      dispatch(fetchProfile(user.id))
    }
  }, [dispatch, user])

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

  const renderContent = useMemo(() => {
    if (profileLoading || prifileEditLoading) {
      return <Loader className={styles.profilePage__loader} />
    }
    if (profileError) {
      return (
        <>
          <Typography color='error' variant='title'>Произошла ошибка</Typography>
          <Typography color='error' variant='subTitle'>Попробуйте перезагрузить страницу</Typography>
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
          onChangeFirstname={onChangeFirstname}
          onChangeUsername={onChangeUsername}
          onChangeLastname={onChangeLastname}
          onChangeAvatar={onChangeAvatar}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
        />
      </>
    )
  }, [profileLoading, prifileEditLoading, profileFormData, isEditableProfile, profileError])

  return (
    <DynamicModuleLoader {...config}>
      <div className={styles.profilePage}>
        {renderContent}
      </div>
    </DynamicModuleLoader>

  )
}

export default ProfilePage
