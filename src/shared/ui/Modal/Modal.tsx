import React, { useCallback, useEffect, useRef } from 'react'
import { Portal } from 'shared/ui/Portal'

import cn from 'classnames'
import { Overlay } from '../Overlay'

import styles from './Modal.module.scss'

export interface ModalProps {
  open: boolean
  onClose?: () => void
  className?: string
  classNameContent?: string
  children?: React.ReactNode
}

export const Modal = ({
  open, onClose, children, className, classNameContent,
}: ModalProps) => {
  const rootRef = useRef<HTMLDivElement | null>(null)

  const onCloseWraperClickHandler = useCallback(
    (event: MouseEvent) => {
      const { target } = event

      if (target instanceof Node && target === rootRef.current) {
        onClose?.()
      }
    },
    [onClose],
  )

  const onCloseKeyboardPress = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose?.()
      }
    },
    [onClose],
  )

  useEffect(() => {
    if (open) {
      document.addEventListener('click', onCloseWraperClickHandler)
      document.addEventListener('keydown', onCloseKeyboardPress)
    }

    return () => {
      document.removeEventListener('click', onCloseWraperClickHandler)
      document.removeEventListener('keydown', onCloseKeyboardPress)
    }
  }, [open, onCloseWraperClickHandler, onCloseKeyboardPress])

  if (!open) {
    return null
  }

  return (
    <Portal>
      <Overlay ref={rootRef} className={cn(styles.modal, className)}>
        <div className={cn(styles.modal__content, classNameContent)}>{children}</div>
      </Overlay>
    </Portal>
  )
}
