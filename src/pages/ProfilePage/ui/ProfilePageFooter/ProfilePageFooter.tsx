import { Button } from 'shared/ui/Button'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useSelector } from 'react-redux'
import { getIsEditableProfile } from 'features/EditableProfile/model/selectors/getIsEditableProfile'
import { editableProfileActions, editProfileCard } from 'features/EditableProfile'
import { getProfile } from 'entities/Profile/model/selectors/getProfile'
import { Flex } from 'shared/ui/Flex'

export const ProfilePageFooter = (): JSX.Element => {
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
      <Button variant='contained' onClick={onSave}>
        Сохранить
      </Button>
      <Button variant='outlined' onClick={onCancelEdit}>
        Отмена
      </Button>
    </>
  ) : (
    <Button variant='contained' onClick={onEdit}>
      Редактировать
    </Button>
  )

  return <Flex justify='end' gap={20}>{buttons}</Flex>
}
