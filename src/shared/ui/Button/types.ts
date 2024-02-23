import { PolimorphicComponentPropsWithRef, PolymorphicRef } from '../__base/types/polimophic'

import { ButtonSize, ButtonVariant } from './constants'

type ButtonVariants = `${ButtonVariant}`
type ButtonSizes = `${ButtonSize}`

type BaseButtonProps = {
  variant?: ButtonVariants
  size?: ButtonSizes
}

export type ButtonProps<Component extends React.ElementType> = PolimorphicComponentPropsWithRef<
  Component,
  BaseButtonProps
>

export type ButtonComponent = <Component extends React.ElementType>(
  props: ButtonProps<Component>,
  ref: PolymorphicRef<Component>,
) => React.ReactNode
