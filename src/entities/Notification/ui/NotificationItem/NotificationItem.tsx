import cn from 'classnames'

import { Typography } from 'shared/ui/Typography'
import { Notification } from '../../model/types/notification'

import styles from './NotificationItem.module.scss'

interface Props {
  item: Notification
  className?: string
}

const NotificationItem = ({ item, className }: Props) => {
  const Component = item.href ? 'a' : 'div'

  return (
    <Component className={cn(styles.item, className)} href={item.href} target='_blank'>
      <Typography variant='subTitle'>
        {item.title}
      </Typography>
      <Typography variant='text'>{item.description}</Typography>
    </Component>
  )
}

export default NotificationItem
