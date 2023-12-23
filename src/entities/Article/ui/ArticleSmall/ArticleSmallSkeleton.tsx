import React from 'react'

import { Skeleton } from 'shared/ui/Skeleton'
import styles from './ArticleSmall.module.scss'

const ArticleSmallSkeleton = () => (
  <div className={styles.article}>
    <Skeleton width='100%' height={155} />
    <div className={styles.info}>
      <Skeleton width={150} height={25} />
      <Skeleton width={70} height={25} />
    </div>
    <Skeleton width={150} height={20} />
  </div>
)

export default ArticleSmallSkeleton
