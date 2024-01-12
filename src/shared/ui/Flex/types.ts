import { PolimorphicComponentPropsWithRef, PolymorphicRef } from '../__base/types/polimophic'
import {
  FlexAlign, FlexDirection, FlexJustify, FlexWrap, gapSizes,
} from './constants'

export type FlexDirections = `${FlexDirection}`
export type FlexJustifies = `${FlexJustify}`
export type FlexAligns = `${FlexAlign}`
type FlexWraps = `${FlexWrap}`
export type GapSize = (typeof gapSizes)[number]

interface BaseFlexProps {
  direction?: FlexDirections
  justify?: FlexJustifies
  align?: FlexAligns
  wrap?: FlexWraps
  gap?: GapSize
}

export type FlexProps<Component extends React.ElementType> = PolimorphicComponentPropsWithRef<Component, BaseFlexProps>

export type FlexComponent = <Component extends React.ElementType>(
  props: FlexProps<Component>,
  ref: PolymorphicRef<Component>,
) => React.ReactElement | null
