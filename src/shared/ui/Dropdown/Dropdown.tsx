/* eslint-disable react/no-array-index-key */
import React, { useRef, useState } from 'react'
import cn from 'classnames'

import { useClickOutside } from 'shared/lib/hooks/useOutsideClick'
import styles from './Dropdown.module.scss'
import { Flex } from '../Flex'
import { DropdownProps } from './types'

const Dropdown: React.FC<DropdownProps> = ({
  items, placement = 'bottomRight', children, className,
}) => {
  const [open, setOpen] = useState(false)

  const rootRef = useRef<HTMLDivElement | null>(null)

  const handleToggleOpen = () => {
    setOpen((prev) => !prev)
  }

  const handleClose = () => {
    setOpen(false)
  }

  useClickOutside(rootRef, handleClose)

  const dropDownList = items.map(({ label, icon: Icon }, index) => (
    <Flex gap={4} as='li' key={index} className={styles.item}>
      {Icon}
      {label}
    </Flex>
  ))

  return (
    <div ref={rootRef} className={cn(styles.dropdown, className)}>
      <button onClick={handleToggleOpen} className={styles.btn}>
        {children}
      </button>
      {open && <ul className={cn(styles.list, styles[placement])}>{dropDownList}</ul>}
    </div>
  )
}

export default Dropdown
