import React, {
  Key, useRef, useState,
} from 'react'
import cn from 'classnames'
import ArrowIcon from 'shared/assets/icons/svg/arrow-horizontal.svg'
import { TypedMemo } from 'shared/ui/__base/components/TypedMemo'
import { useClickOutside } from 'shared/lib/hooks/useOutsideClick'

import { Flex } from '../Flex'

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

  useClickOutside(rootRef, () => {
    setOpenSelect(false)
    onClose?.()
  })

  const dropdownList = options.map((option) => (
    <Option key={option.value as Key} onClick={handleOptionClick(option.value)}>
      {option.label}
    </Option>
  ))

  return (
    <Flex
      direction='column'
      align='stretch'
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

        <Flex onClick={handlePlaceholderClick} className={styles.select__placeholder}>
          {labelView || placeholder}
        </Flex>

        {openSelect && <ul className={styles.select__list}>{dropdownList}</ul>}
      </div>
    </Flex>
  )
}

export default TypedMemo(Select)
