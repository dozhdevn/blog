import { useCallback, useRef } from 'react'

export const useDebounceFn = <T>(callback: (...args: T[]) => void, delay: number) => {
  const timerRef = useRef() as React.MutableRefObject<any>

  const debouncedCallback = useCallback(
    (...args: T[]) => {
      clearTimeout(timerRef.current)

      timerRef.current = setTimeout(() => {
        callback(...args)
      }, delay)
    },
    [callback, delay],
  )

  return debouncedCallback
}
