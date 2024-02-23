import { PolimorphicComponentPropsWithRef, PolymorphicRef } from '../__base/types/polimophic'

import { TypographyAlign, TypographyColor, TypographyVariant } from './constants'

type TypographyAlignes = `${TypographyAlign}`
type TypographyVariants = `${TypographyVariant}`
type TypographyColors = `${TypographyColor}`

type BaseTypographyProps = {
  align?: TypographyAlignes
  variant?: TypographyVariants
  color?: TypographyColors
}

export type TypographyProps<Component extends React.ElementType> = PolimorphicComponentPropsWithRef<
  Component,
  BaseTypographyProps
>

export type TypographyComponent = <Component extends React.ElementType>(
  props: TypographyProps<Component>,
  ref: PolymorphicRef<Component>,
) => React.ReactNode
