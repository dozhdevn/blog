import React, { useEffect, useMemo } from 'react'

import { ProfileCard, fetchProfile, profileReducer } from 'entities/Profile'
import { getProfile } from 'entities/Profile/model/selectors/getProfile'
import { getAuthData } from 'entities/User'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { useSelector } from 'react-redux'

import { Avatar } from 'components/Avatar'
import { getProfileLoading } from 'entities/Profile/model/selectors/getProfileLoading'
import { Loader } from 'components/Loader'
import { DynamicModuleLoader } from 'core/layouts/DynamicModuleLoader'
import styles from './ProfilePage.module.scss'

const config = {
  reducers: {
    profile: profileReducer,
  },
}

const ProfilePage: React.FC = () => {
  const dispatch = useAppDispatch()
  const user = useSelector(getAuthData)
  const profile = useSelector(getProfile)
  const profileLoading = useSelector(getProfileLoading)

  useEffect(() => {
    if (user) {
      dispatch(fetchProfile(user.id))
    }
  }, [dispatch, user])

  const renderContent = useMemo(() => {
    if (profileLoading) {
      return <Loader className={styles.profilePage__loader} />
    }

    return (
      <>
        <Avatar size={128} src={profile?.avatar} />
        <ProfileCard profile={profile} />
      </>
    )
  }, [profileLoading, profile])

  return (
    <DynamicModuleLoader {...config}>
      <div className={styles.profilePage}>
        {renderContent}
      </div>
    </DynamicModuleLoader>

  )
}

export default ProfilePage
