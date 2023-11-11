export type PolymorphicRef<Component extends React.ElementType> = React.ComponentPropsWithRef<Component>['ref']

export type AsProp<Component extends React.ElementType> = {
  as?: Component
}

export type BasePropsWithAs<Component extends React.ElementType, Props = {}> = AsProp<Component> & Props

export type PolimorphicComponentPropsWithoutRef<
  Component extends React.ElementType,
  Props = {},
> = React.PropsWithChildren<BasePropsWithAs<Component, Props>> &
  Omit<React.ComponentPropsWithoutRef<Component>, keyof BasePropsWithAs<Component, Props>>

export type PolimorphicComponentPropsWithRef<
  Component extends React.ElementType,
  Props = {},
> = PolimorphicComponentPropsWithoutRef<Component, Props> & { ref?: PolymorphicRef<Component> }
