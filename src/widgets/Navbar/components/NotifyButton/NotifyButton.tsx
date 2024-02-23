import { IconButton } from 'shared/ui/IconButton'
import NotifyIcon from 'shared/assets/icons/svg/notify.svg'

interface Props {
  onClick: () => void
}

const NotifyButton = ({ onClick }: Props) => (
  <IconButton onClick={onClick}>
    <NotifyIcon />
  </IconButton>
)

export default NotifyButton
