import React from 'react'
import { createPortal } from 'react-dom'

export interface PortalProps {
  mountNode?: HTMLElement
}

export const Portal: React.FC<PortalProps> = ({ children, mountNode = document.body }) => createPortal(children, mountNode)
