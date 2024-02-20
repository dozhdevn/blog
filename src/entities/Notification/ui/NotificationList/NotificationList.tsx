/* eslint-disable react/no-array-index-key */
import { useGetNotificationsQuery } from 'entities/Notification/api/notificationApi'
import { Flex } from 'shared/ui/Flex'
import cn from 'classnames'
import { NotificationItem } from '../NotificationItem'
import NotificationItemSkeleton from '../NotificationItem/NotificationItemSkeleton'

import styles from './NotifictionList.module.scss'

interface Props {
  className?: string
}

const NotificationList = ({ className }: Props) => {
  const { data, isLoading } = useGetNotificationsQuery(null, {
    pollingInterval: 5000,
  })

  const content = isLoading
    ? Array.from({ length: 5 }).map((_, index) => <NotificationItemSkeleton key={index} />)
    : data && data.map((item) => <NotificationItem key={item.id} item={item} />)

  return (
    <Flex direction='column' gap={4} className={cn(styles.list, className)}>
      {content}
    </Flex>
  )
}

export default NotificationList
