import { getAuthData, userActions } from 'entities/User'
import { isUserAdmin } from 'entities/User/model/selectors/roleSelectors'
import React, { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { getRouteAdmin, getRouteProfile } from 'shared/constants/routing'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { AppLink } from 'shared/ui/AppLink'
import { Avatar } from 'shared/ui/Avatar'
import { Dropdown } from 'shared/ui/Dropdown'

interface Props {
  className?: string
}

const AvatarDropdown: React.FC<Props> = ({ className }) => {
  const dispatch = useAppDispatch()
  const authData = useSelector(getAuthData)
  const adminUser = useSelector(isUserAdmin)

  const logOutHandler = useCallback(() => {
    dispatch(userActions.logOut())
  }, [dispatch])

  if (authData) {
    const adminDropdownItems = adminUser
      ? [
        {
          label: <AppLink to={getRouteAdmin()}>Админка</AppLink>,
        },
      ]
      : []

    return (
      <Dropdown
        items={[
          ...adminDropdownItems,
          {
            label: <AppLink to={getRouteProfile(authData.id)}>Профиль</AppLink>,
          },
          {
            label: <button onClick={logOutHandler}>Выйти</button>,
          },
        ]}
        placement='bottomLeft'
        className={className}
      >
        <Avatar src={authData.avatar} size={35} />
      </Dropdown>
    )
  }

  return null
}

export default AvatarDropdown
