import React from 'react'

import { Skeleton } from 'shared/ui/Skeleton/Skeleton'
import styles from './ArticleSkeleton.module.scss'

export const ArticleSkeleton: React.FC = () => (
  <div className={styles.articleSkeleton}>
    <div className={styles.articleSkeleton__header}>
      <Skeleton height={32} width={32} border='50%' className={styles.articleSkeleton__skeleton} />
      <Skeleton height={24} width={150} border='8px' className={styles.articleSkeleton__skeleton} />
    </div>

    <Skeleton height={38} width='100%' border='8px' className={styles.articleSkeleton__skeleton} />
    <Skeleton height={38} width='90%' border='8px' className={styles.articleSkeleton__skeleton} />
    <Skeleton height={27} width='80%' border='8px' className={styles.articleSkeleton__skeleton} />

    <Skeleton height={620} width='100%' border='16px' className={styles.articleSkeleton__skeleton} />

    <Skeleton height={17} width='90%' border='8px' className={styles.articleSkeleton__skeleton} />
    <Skeleton height={17} width='90%' border='8px' className={styles.articleSkeleton__skeleton} />
    <Skeleton height={17} width='90%' border='8px' className={styles.articleSkeleton__skeleton} />
  </div>
)
