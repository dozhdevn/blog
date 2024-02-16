import { Skeleton } from 'shared/ui/Skeleton'
import styles from './NotificationItem.module.scss'

const NotificationItemSkeleton = () => <Skeleton width='100%' height={60} className={styles.skeleton} />

export default NotificationItemSkeleton
