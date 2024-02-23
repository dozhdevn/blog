import { PropsWithChildren, useRef } from 'react'
import { useClickOutside } from 'shared/lib/hooks/useOutsideClick'

import { Portal } from '../Portal'
import { Overlay } from '../Overlay'
import { Flex } from '../Flex'

import styles from './Drawer.module.scss'

interface Props {
  open: boolean
  onClose?: () => void
  className?: string
}

const Drawer = ({
  open, onClose, className, children,
}: PropsWithChildren<Props>) => {
  const ref = useRef<HTMLDivElement>(null)
  useClickOutside(ref, onClose)

  if (!open) {
    return null
  }

  return (
    <Portal>
      <Overlay className={className}>
        <Flex ref={ref} className={styles.content}>
          {children}
        </Flex>
      </Overlay>
    </Portal>
  )
}

export default Drawer
