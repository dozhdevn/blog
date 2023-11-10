import React from 'react'
import cn from 'classnames'

import styles from './Skeleton.module.scss'

export interface SkeletonProps {
  width?: number | string
  height?: number | string
  border?: string
  className?: string
}

export const Skeleton: React.FC<SkeletonProps> = ({
  width, height, border, className,
}) => {
  const style: React.CSSProperties = {
    width,
    height,
    borderRadius: border,
  }

  return <div className={cn(styles.skeleton, className)} style={style} />
}
