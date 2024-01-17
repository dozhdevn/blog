import { createPortal } from 'react-dom'

export interface PortalProps {
  mountNode?: HTMLElement
  children?: React.ReactNode
}

export const Portal = ({ children, mountNode = document.body }: PortalProps) => createPortal(children, mountNode)
