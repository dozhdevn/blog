import { useState } from 'react'
import { Popover } from 'shared/ui/Popover'
import { NotificationList } from 'entities/Notification'
import { useMatchMedia } from 'shared/lib/hooks/useMatchMedia'
import { Drawer } from 'shared/ui/Drawer'
import { NotifyButton } from 'widgets/Navbar/components/NotifyButton'

import styles from './NotificationButton.module.scss'

const NotificationButton = () => {
  const { isDesktop } = useMatchMedia()

  const [openList, setOpenList] = useState(false)

  const handleToggleList = () => {
    setOpenList((prev) => !prev)
  }

  const handleCloseList = () => {
    setOpenList(false)
  }

  if (isDesktop) {
    return (
      <Popover
        isOpen={openList}
        content={<NotificationList className={styles.list} />}
        positions={['bottom', 'right', 'left', 'top']}
        align='end'
        onClickOutside={handleCloseList}
        padding={10}
      >
        <NotifyButton onClick={handleToggleList} />
      </Popover>
    )
  }

  return (
    <>
      <NotifyButton onClick={handleToggleList} />
      <Drawer open={openList} onClose={handleCloseList}>
        <NotificationList />
      </Drawer>
    </>
  )
}

export default NotificationButton
