import { forwardRef, useMemo } from 'react'
import cn from 'classnames'

import styles from './Typography.module.scss'

type HTMLTypographyProps = React.InputHTMLAttributes<HTMLElement>

type Align = 'left' | 'center' | 'right'

type TypographyVariant = 'title' | 'subTitle' | 'text'

type TypographyColor = 'default' | 'error'

type TypographyRef = HTMLParagraphElement | HTMLHeadingElement

export interface TypographyProps extends HTMLTypographyProps {
  variant?: TypographyVariant
  color?: TypographyColor
  align?: Align
  className?: string
}

export const Typography = forwardRef<TypographyRef, TypographyProps>((props, ref) => {
  const {
    variant = 'text',
    color = 'default',
    align = 'left',
    className, children,
  } = props

  const Component = useMemo(() => {
    if (variant === 'title') {
      return 'h2'
    }

    if (variant === 'subTitle') {
      return 'h4'
    }

    return 'p'
  }, [variant])

  const classes = cn(
    styles.typography,
    styles[`typography__${variant}`],
    styles[`typography_${color}`],
    styles[`typography_align_${align}`],
    className,
  )

  return <Component className={classes} ref={ref}>{children}</Component>
})
