import React, { useEffect } from 'react'

import { withAsyncReducers } from 'core/hocs/withAsyncReducers'
import { ProfileCard, fetchProfile, profileReducer } from 'entities/Profile'
import { getProfile } from 'entities/Profile/model/selectors/getProfile'
import { getAuthData } from 'entities/User'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { useSelector } from 'react-redux'

import { Avatar } from 'components/Avatar'
import styles from './ProfilePage.module.scss'

const ProfilePage: React.FC = () => {
  const dispatch = useAppDispatch()
  const user = useSelector(getAuthData)
  const profile = useSelector(getProfile)

  useEffect(() => {
    if (user) {
      dispatch(fetchProfile(user.id))
    }
  }, [dispatch, user])

  return (
    <div className={styles.profilePage}>
      <Avatar size={128} src={profile?.avatar} />
      <ProfileCard profile={profile} />
    </div>
  )
}

const config = {
  reducers: {
    profile: profileReducer,
  },

}

export default withAsyncReducers(ProfilePage, config)
