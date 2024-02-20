import React, { useEffect } from 'react'

export const useClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: React.RefObject<T>,
  onClickOutside?: (event?: MouseEvent) => void,
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (!ref.current?.contains(event.target as Node)) {
        onClickOutside?.(event)
      }
    }

    window.addEventListener('mousedown', handleClickOutside)

    return () => {
      window.removeEventListener('mousedown', handleClickOutside)
    }
  }, [onClickOutside, ref])
}
