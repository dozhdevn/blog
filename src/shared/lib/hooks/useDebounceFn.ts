import { useCallback, useEffect, useRef } from 'react'

export const useDebounceFn = <T>(callback: (...args: T[]) => void, delay: number) => {
  const timerRef = useRef<NodeJS.Timeout>()

  useEffect(
    () => () => {
      clearTimeout(timerRef.current)
    },
    [],
  )

  const debouncedCallback = useCallback(
    (...args: T[]) => {
      clearTimeout(timerRef.current)

      timerRef.current = setTimeout(() => {
        callback(...args)
      }, delay)
    },
    [callback, delay, timerRef],
  )

  return debouncedCallback
}
