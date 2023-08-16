import React, { useState } from 'react'

import cn from 'classnames'

import { Button } from 'components/Button'

import { useTranslation } from 'react-i18next'
import { LoginModal } from 'feature/AuthByUserName'
import styles from './Navbar.module.scss'

export interface NavbarProps {
  className?: string
}

export const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation()

  const [openLoginModal, setOpenLoginModal] = useState(false)

  const openLoginModalHandler = () => {
    setOpenLoginModal(true)
  }

  const closeLoginModalHandler = () => {
    setOpenLoginModal(false)
  }

  return (
    <div className={cn(styles.navbar, className)}>
      <div className={styles.navbar__links}>
        <Button onClick={openLoginModalHandler}>{t('Войти')}</Button>
      </div>
      <LoginModal open={openLoginModal} onClose={closeLoginModalHandler} />
    </div>
  )
}
