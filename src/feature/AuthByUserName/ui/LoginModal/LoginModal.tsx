import { Modal } from 'components/Modal'
import React from 'react'
import { LoginForm } from '../LoginForm'

export interface LoginModalProps {
  open: boolean
  onClose: () => void
}

export const LoginModal: React.FC<LoginModalProps> = ({ open, onClose }) => (
  <Modal open={open} onClose={onClose}>
    <LoginForm />
  </Modal>
)
