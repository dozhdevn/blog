import { forwardRef } from 'react'
import cn from 'classnames'
import { PolymorphicRef } from '../__base/types/polimophic'
import {
  FlexAligns, FlexComponent, FlexDirections, FlexJustifies, FlexProps, GapSize,
} from './types'

import styles from './Flex.module.scss'

const directionClasses: Record<FlexDirections, string> = {
  row: styles.directionRow,
  column: styles.directionColumn,
}

const justifyClasses: Record<FlexJustifies, string> = {
  start: styles.justifyStart,
  center: styles.justifyCenter,
  end: styles.justifyEnd,
  between: styles.justifyBetween,
}

const alignClasses: Record<FlexAligns, string> = {
  start: styles.alignStart,
  center: styles.alignCenter,
  end: styles.alignEnd,
  stretch: styles.alignStretch,
}

const gapClasses: Record<GapSize, string> = {
  2: styles.gap2,
  4: styles.gap4,
  8: styles.gap8,
  12: styles.gap12,
  16: styles.gap16,
  20: styles.gap20,
  24: styles.gap24,
}

const FlexBase = <T extends React.ElementType = 'div'>(props: FlexProps<T>, ref: PolymorphicRef<T>) => {
  const {
    as = 'div',
    direction = 'row',
    justify = 'start',
    align = 'center',
    wrap = 'nowrap',
    gap,
    children,
    className,
    ...rest
  } = props

  const classNames = cn(
    directionClasses[direction],
    justifyClasses[justify],
    alignClasses[align],
    gap && gapClasses[gap],
    styles[wrap],
    className,
  )

  const Component = as

  return (
    <Component {...rest} ref={ref} className={classNames}>
      {children}
    </Component>
  )
}

const Flex: FlexComponent = forwardRef(FlexBase)

export default Flex
