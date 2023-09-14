import { Button } from 'components/Button'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { useSelector } from 'react-redux'
import { getIsEditableProfile } from 'features/EditableProfile/model/selectors/getIsEditableProfile'
import { editableProfileActions, editProfileCard } from 'features/EditableProfile'
import { getProfile } from 'entities/Profile/model/selectors/getProfile'
import styles from './ProfilePageFooter.module.scss'

export const ProfilePageFooter = () : JSX.Element => {
  const dispatch = useAppDispatch()

  const profile = useSelector(getProfile)

  const isEditable = useSelector(getIsEditableProfile)

  const onEdit = () => {
    dispatch(editableProfileActions.setIsEditable(true))
  }

  const onCancelEdit = () => {
    dispatch(editableProfileActions.cancelEditable(profile))
  }

  const onSave = () => {
    dispatch(editProfileCard())
  }

  const buttons = isEditable ? (
    <>
      <Button variant='contained' onClick={onSave}>Сохранить</Button>
      <Button variant='outlined' onClick={onCancelEdit}>Отмена</Button>
    </>
  )
    : <Button variant='contained' onClick={onEdit}>Редактировать</Button>

  return (
    <div className={styles.profilePageFooter}>{buttons}</div>
  )
}
