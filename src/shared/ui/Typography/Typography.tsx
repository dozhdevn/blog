import cn from 'classnames'

import React from 'react'
import styles from './Typography.module.scss'
import { TypographyComponent, TypographyProps } from './types'
import { PolymorphicRef } from '../__base/types/polimophic'

const TypographyBase = <T extends React.ElementType>(props: TypographyProps<T>, ref: PolymorphicRef<T>) => {
  const {
    as: Component = 'p',
    variant = 'text',
    color = 'default',
    align = 'left',
    className,
    children,
    ...rest
  } = props

  const classes = cn(
    styles.typography,
    styles[`typography__${variant}`],
    styles[`typography_${color}`],
    styles[`typography_align_${align}`],
    className,
  )

  return (
    <Component {...rest} className={classes} ref={ref}>
      {children}
    </Component>
  )
}

export const Typography: TypographyComponent = React.forwardRef(TypographyBase)
