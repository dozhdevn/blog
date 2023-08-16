import React, { forwardRef, useRef, useState } from 'react'
import cn from 'classnames'

import styles from './Input.module.scss'

type HTMLInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

export interface InputProps extends HTMLInputProps {
  onChange?: (value: string) => void
  value?: string
  label?: string
  startIcon?: React.VFC<React.SVGProps<SVGSVGElement>>
  className?: string
  classNameInput?: string
  classNameLabel?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    label,
    startIcon: StartIcon,
    className,
    classNameInput,
    classNameLabel,
    value,
    onChange,
    ...otherProps
  } = props

  const [focused, setFocused] = useState(false)
  const inputRef = useRef<HTMLInputElement | null>(null)

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value)
  }

  const onClickContainerHandler = () => {
    inputRef.current.focus()
  }

  const focusHandler = () => {
    setFocused(true)
  }

  const blurHandler = () => {
    setFocused(false)
  }

  const labelComponent = label && <span className={cn(styles.input__label, classNameLabel)}>{label}</span>

  const StartIconComponent = StartIcon && <StartIcon className={styles.input__startIcon} />

  return (
    <div className={cn(styles.input, className)} ref={ref}>
      {labelComponent}
      <div
        className={cn(
          styles.input__container,
          { [styles.input__container_active]: focused },
          className,
        )}
        onFocus={focusHandler}
        onBlur={blurHandler}
        onClick={onClickContainerHandler}
      >
        {StartIconComponent}
        <input
          value={value}
          onChange={onChangeHandler}
          {...otherProps}
          className={cn(styles.input__item,classNameInput)}
          ref={inputRef}
        />
      </div>
    </div>
  )
})
