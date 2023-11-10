import React, { useCallback, useEffect, useRef } from 'react'
import { Portal } from 'shared/ui/Portal'

import cn from 'classnames'
import styles from './Modal.module.scss'

export interface ModalProps {
  open: boolean
  onClose?: () => void
  className?: string
  classNameContent?: string
}

export const Modal: React.FC<ModalProps> = ({
  open, onClose, children, className, classNameContent,
}) => {
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
      <div className={cn(styles.modal, className)} ref={rootRef}>
        <div className={cn(styles.modal__content, classNameContent)}>{children}</div>
      </div>
    </Portal>
  )
}
