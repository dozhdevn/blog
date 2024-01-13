import React, { useEffect } from 'react'

export const useClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: React.RefObject<T>,
  onClickOutside: () => void,
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (!ref.current?.contains(event.target as Node)) {
        onClickOutside()
      }
    }

    window.addEventListener('click', handleClickOutside)

    return () => {
      window.removeEventListener('click', handleClickOutside)
    }
  }, [onClickOutside, ref])
}
