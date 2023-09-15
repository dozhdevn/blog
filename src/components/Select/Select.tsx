import React, {
  Key, useEffect, useRef, useState,
} from 'react'
import cn from 'classnames'
import ArrowIcon from 'assets/icons/svg/arrow-horizontal.svg'
import { TypedMemo } from 'components/TypedMemo'
import { SelectProps } from './types'

import styles from './Select.module.scss'
import { Option } from './components/Option/Option'

const Select = <T,>({
  value, options, placeholder, open, disabled, onChange, onClose, className,
}: SelectProps<T>): JSX.Element => {
  const [openSelect, setOpenSelect] = useState(!!open)

  const label = options.find((opt) => opt.value === value)?.label

  const rootRef = useRef<HTMLDivElement | null>(null)

  const handleOptionClick = (value: T) => () => {
    onChange(value)
    setOpenSelect(false)
  }

  const handlePlaceholderClick = () => {
    if (disabled) {
      return
    }
    setOpenSelect((prev) => !prev)
  }

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (event.target instanceof Node && !rootRef.current?.contains(event.target)) {
        setOpenSelect(false)
        onClose?.()
      }
    }

    window.addEventListener('click', handleClick)

    return () => {
      window.removeEventListener('click', handleClick)
    }
  }, [])

  const dropdownList = options.map((option) => (
    <Option key={option.value as Key} onClick={handleOptionClick(option.value)}>
      {option.label}
    </Option>
  ))

  return (
    <div
      ref={rootRef}
      className={cn(
        styles.select,
        {
          [styles.select_open]: openSelect,
          [styles.select_disabled]: disabled,
        },
        className,
      )}
    >
      <div className={styles.select__arrow}>
        <ArrowIcon />
      </div>

      <div
        onClick={handlePlaceholderClick}
        className={styles.select__placeholder}
      >
        {label || placeholder}

      </div>

      {openSelect && <ul className={styles.select__list}>{dropdownList}</ul>}
    </div>
  )
}

export default TypedMemo(Select)
