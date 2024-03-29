/* eslint-disable react/no-array-index-key */
import React, { useRef, useState } from 'react'
import cn from 'classnames'
import { useClickOutside } from 'shared/lib/hooks/useOutsideClick'

import { Flex } from '../Flex'

import styles from './Dropdown.module.scss'
import { DropdownProps } from './types'

const Dropdown = ({
  items, placement = 'bottomRight', children, className,
}: DropdownProps) => {
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
