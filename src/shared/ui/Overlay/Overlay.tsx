import { PropsWithChildren, forwardRef } from 'react'
import cn from 'classnames'

import { Flex } from '../Flex'
import { PolymorphicRef } from '../__base/types/polimophic'

import styles from './Overlay.module.scss'

interface Props {
  className?: string
}

const OverlayBase = ({ className, children }: PropsWithChildren<Props>, ref: PolymorphicRef<'div'>) => (
  <Flex justify='center' className={cn(styles.overlay, className)} ref={ref}>
    {children}
  </Flex>
)

const Overlay = forwardRef(OverlayBase)

export default Overlay
