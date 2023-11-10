import React, {
  Key, useEffect, useRef, useState,
} from 'react'
import cn from 'classnames'
import ArrowIcon from 'shared/assets/icons/svg/arrow-horizontal.svg'
import { TypedMemo } from 'shared/ui/__base/TypedMemo'
import { SelectProps } from './types'

import styles from './Select.module.scss'
import { Option } from './components/Option/Option'

const Select = <T,>({
  value,
  options,
  placeholder,
  label,
  open,
  disabled,
  onChange,
  onClose,
  className,
}: SelectProps<T>): JSX.Element => {
  const [openSelect, setOpenSelect] = useState(!!open)

  const labelView = options.find((opt) => opt.value === value)?.label

  const labelComponent = label && <span className={styles.select__label}>{label}</span>

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
      className={cn(
        styles.select,
        {
          [styles.select_open]: openSelect,
          [styles.select_disabled]: disabled,
        },
        className,
      )}
      ref={rootRef}
    >
      {labelComponent}
      <div className={styles.select__container}>
        <div className={styles.select__arrow}>
          <ArrowIcon />
        </div>

        <div onClick={handlePlaceholderClick} className={styles.select__placeholder}>
          {labelView || placeholder}
        </div>

        {openSelect && <ul className={styles.select__list}>{dropdownList}</ul>}
      </div>
    </div>
  )
}

export default TypedMemo(Select)
