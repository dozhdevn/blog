import { useState } from 'react'
import { IconButton } from 'shared/ui/IconButton'
import { Popover } from 'shared/ui/Popover'

import NotifyIcon from 'shared/assets/icons/svg/notify.svg'
import { NotificationList } from 'entities/Notification'

import styles from './NotificationButton.module.scss'

const NotificationButton = () => {
  const [openList, setOpenList] = useState(false)

  const handleToggleList = () => {
    setOpenList((prev) => !prev)
  }

  const handleCloseList = () => {
    setOpenList(false)
  }

  return (
    <Popover
      isOpen={openList}
      content={<NotificationList className={styles.list} />}
      positions={['bottom', 'right', 'left', 'top']}
      align='end'
      onClickOutside={handleCloseList}
      padding={10}
    >
      <IconButton onClick={handleToggleList}>
        <NotifyIcon />
      </IconButton>
    </Popover>
  )
}

export default NotificationButton
