import React from 'react'

export const TypedMemo: <Component extends React.FC<any>>(
  component: Component,
  compare?: (
    prevProps: React.ComponentPropsWithoutRef<Component>,
    newProps: React.ComponentPropsWithoutRef<Component>
  ) => boolean
) => Component = React.memo
