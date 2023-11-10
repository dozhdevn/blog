import React from 'react'
import cn from 'classnames'

import './Loader.scss'

export interface LoaderProps {
  className?: string
}

export const Loader: React.FC<LoaderProps> = ({ className }) => (
  <div className={cn('lds-spinner', className)}>
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
  </div>
)
