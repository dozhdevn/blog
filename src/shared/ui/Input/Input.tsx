import React, {
  forwardRef, memo, useRef, useState,
} from 'react'
import cn from 'classnames'
import { Typography } from 'shared/ui/Typography'

import { Flex } from '../Flex'

import styles from './Input.module.scss'

type HTMLInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

export interface InputProps extends HTMLInputProps {
  onChange?: (value: string) => void
  value?: string
  label?: string
  startIcon?: React.VFC<React.SVGProps<SVGSVGElement>>
  error?: boolean
  readOnly?: boolean
  helperText?: string
  className?: string
  classNameContainer?: string
  classNameInput?: string
  classNameLabel?: string
}

export const Input = memo(
  forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const {
      label,
      startIcon: StartIcon,
      error,
      helperText,
      className,
      classNameContainer,
      classNameInput,
      classNameLabel,
      value,
      onChange,
      readOnly,
      ...otherProps
    } = props

    const [focused, setFocused] = useState(false)
    const inputRef = useRef<HTMLInputElement | null>(null)

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(event.target.value)
    }

    const onClickContainerHandler = () => {
      inputRef?.current?.focus()
    }

    const focusHandler = () => {
      if (!readOnly) {
        setFocused(true)
      }
    }

    const blurHandler = () => {
      setFocused(false)
    }

    const labelComponent = label && <span className={cn(styles.input__label, classNameLabel)}>{label}</span>

    const StartIconComponent = StartIcon && <StartIcon className={styles.input__startIcon} />

    const helperTextMessage = helperText && (
      <Typography className={styles.input__helperText} s>
        {helperText}
      </Typography>
    )

    return (
      <Flex
        direction='column'
        align='stretch'
        className={cn(
          styles.input,

          {
            [styles.input_readonly]: readOnly,
            [styles.input_error]: error,
          },
          className,
        )}
        ref={ref}
      >
        {labelComponent}
        <Flex
          className={cn(
            styles.input__container,
            {
              [styles.input__container_active]: focused,
            },
            classNameContainer,
          )}
          onFocus={focusHandler}
          onBlur={blurHandler}
          onClick={onClickContainerHandler}
        >
          {StartIconComponent}
          <input
            value={value}
            onChange={onChangeHandler}
            readOnly={readOnly}
            {...otherProps}
            className={cn(styles.input__item, classNameInput)}
            ref={inputRef}
          />
        </Flex>
        {helperTextMessage}
      </Flex>
    )
  }),
)
