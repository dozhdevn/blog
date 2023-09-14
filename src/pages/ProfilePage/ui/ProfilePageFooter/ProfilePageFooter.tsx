import React, { useState } from 'react'

import { Button } from 'components/Button'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { profileActions } from 'entities/Profile'
import { useSelector } from 'react-redux'
import { getIsEditableProfile } from 'entities/Profile/model/selectors/getIsEdutableProfile'
import styles from './ProfilePageFooter.module.scss'

export const ProfilePageFooter = () : JSX.Element => {
  const dispatch = useAppDispatch()

  const isEditable = useSelector(getIsEditableProfile)

  const onEdit = () => {
    dispatch(profileActions.setIsEditable(true))
  }

  const cancelEdit = () => {
    dispatch(profileActions.setIsEditable(false))
  }

  const buttons = isEditable ? (
    <>
      <Button variant='contained'>Сохранить</Button>
      <Button variant='outlined' onClick={cancelEdit}>Отмена</Button>
    </>
  )
    : <Button variant='contained' onClick={onEdit}>Редактировать</Button>

  return (
    <div className={styles.profilePageFooter}>{buttons}</div>
  )
}
