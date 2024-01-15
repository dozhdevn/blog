import React, { useCallback, useState } from 'react'

import cn from 'classnames'

import { Button } from 'shared/ui/Button'

import { useTranslation } from 'react-i18next'
import { LoginModal } from 'features/AuthByUserName'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { getAuthData, userActions } from 'entities/User'
import { useSelector } from 'react-redux'

import { Flex } from 'shared/ui/Flex'
import { Dropdown } from 'shared/ui/Dropdown'
import { Avatar } from 'shared/ui/Avatar'
import { AppLink } from 'shared/ui/AppLink'
import { RoutePath } from 'app/routes/model/routePaths'
import styles from './Navbar.module.scss'

export interface NavbarProps {
  className?: string
}

export const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()

  const authData = useSelector(getAuthData)
  const [openLoginModal, setOpenLoginModal] = useState(false)

  const openLoginModalHandler = () => {
    setOpenLoginModal(true)
  }

  const closeLoginModalHandler = () => {
    setOpenLoginModal(false)
  }

  const logOutHandler = useCallback(() => {
    dispatch(userActions.logOut())
  }, [dispatch])

  const loginButton = authData ? (
    <Dropdown
      items={[
        {
          label: <AppLink to={`${RoutePath.PROFILE}/${authData.id}`}>Профиль</AppLink>,
        },
        {
          label: <button onClick={logOutHandler}>Выйти</button>,
        },
      ]}
      placement='bottomLeft'
    >
      <Avatar src={authData.avatar} size={35} />
    </Dropdown>
  ) : (
    <Button onClick={openLoginModalHandler}>{t('Войти')}</Button>
  )

  return (
    <Flex as='header' className={cn(styles.navbar, className)}>
      <div className={styles.navbar__links}>{loginButton}</div>
      <LoginModal open={openLoginModal} onClose={closeLoginModalHandler} />
    </Flex>
  )
}
