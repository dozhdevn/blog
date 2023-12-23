import { Skeleton } from 'shared/ui/Skeleton'
import styles from './ArticleLarge.module.scss'

const ArticleLargeSkeleton = () => (
  <div className={styles.article}>
    <div className={styles.header}>
      <div className={styles.userInfo}>
        <Skeleton width={40} height={40} border='50%' />
        <Skeleton width={150} height={20} />
      </div>
      <Skeleton width={150} height={20} />
    </div>
    <Skeleton width={250} height={40} />
    <Skeleton width={350} height={40} />
    <Skeleton width='100%' height={320} />

    <div className={styles.footer}>
      <Skeleton width={150} height={40} />
      <Skeleton width={150} height={40} />
    </div>
  </div>
)

export default ArticleLargeSkeleton
