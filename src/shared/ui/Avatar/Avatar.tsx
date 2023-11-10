import React, { memo } from 'react'
import cn from 'classnames'

import styles from './Avatar.module.scss'

export interface AvatarProps {
  size?: number
  src?: string
  alt?: string
  className?: string
}

export const Avatar: React.FC<AvatarProps> = memo(({
  size = 100, src, alt, className,
}) => (
  <div style={{ width: size, height: size }} className={cn(styles.avatar, className)}>
    <img src={src} alt={alt} className={styles.avatar__img} />
  </div>
))
