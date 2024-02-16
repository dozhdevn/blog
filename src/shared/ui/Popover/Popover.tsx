import cn from 'classnames'
import { PopoverProps, Popover as TinyPopover } from 'react-tiny-popover'

import styles from './Popover.module.scss'

interface Props extends PopoverProps {}

const Popover = ({ children, containerClassName, ...props }: Props) => (
  <div className={styles.popover}>
    <TinyPopover containerClassName={cn(styles.container, containerClassName)} {...props}>
      <div>{children}</div>
    </TinyPopover>
  </div>
)

export default Popover
