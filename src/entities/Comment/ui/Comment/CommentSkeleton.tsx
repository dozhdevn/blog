import cn from 'classnames'

import { Skeleton } from 'components/Skeleton'
import styles from './Comment.module.scss'

interface CommentSkeletonProps {
  className?: string
}

export const CommentSkeleton: React.FC<CommentSkeletonProps> = ({ className }) => (
  <div className={cn(styles.comment, className)}>
    <Skeleton width={40} height={40} border='50%' />
    <div className={styles.content}>
      <Skeleton className={styles.username} width={80} height={18} />
      <Skeleton width='100%' height={50} />
    </div>
  </div>
)
