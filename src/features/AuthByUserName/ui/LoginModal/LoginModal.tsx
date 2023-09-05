import { Modal } from 'components/Modal'
import React from 'react'
import { LoginForm } from '../LoginForm'

import styles from './LoginModal.module.scss'

export interface LoginModalProps {
  open: boolean
  onClose: () => void
}

export const LoginModal: React.FC<LoginModalProps> = ({ open, onClose }) => (
  <Modal open={open} onClose={onClose} classNameContent={styles.loginModal__content}>
    <LoginForm onClose={onClose} />
  </Modal>
)
