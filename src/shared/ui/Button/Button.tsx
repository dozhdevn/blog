import cn from 'classnames'
import React from 'react'

import styles from './Button.module.scss'
import { ButtonComponent, ButtonProps } from './types'
import { PolymorphicRef } from '../__base/types/polimophic'

const ButtonBase = <T extends React.ElementType = 'button'>(props: ButtonProps<T>, ref: PolymorphicRef<T>) => {
  const {
    as, variant = 'clear', children, className, size = 'medium', ...rest
  } = props
  const Component = as ?? 'button'
  const buttonClassName = cn(styles.button, [styles[`button_${variant}`]], [styles[`button_${size}`]], className)

  return (
    <Component {...rest} className={buttonClassName} ref={ref}>
      {children}
    </Component>
  )
}

export const Button: ButtonComponent = React.forwardRef(ButtonBase)
