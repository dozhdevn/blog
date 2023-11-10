import { Modal } from 'shared/ui/Modal'
import React, { Suspense } from 'react'

import { Loader } from 'shared/ui/Loader'
import { LoginFormLazy } from '../LoginForm/LoginForm.lazy'

import styles from './LoginModal.module.scss'

export interface LoginModalProps {
  open: boolean
  onClose: () => void
}

export const LoginModal: React.FC<LoginModalProps> = ({ open, onClose }) => (
  <Modal open={open} onClose={onClose} classNameContent={styles.loginModal__content}>
    <Suspense fallback={<Loader />}>
      <LoginFormLazy onClose={onClose} />
    </Suspense>
  </Modal>
)
