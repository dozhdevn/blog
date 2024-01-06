import { useCallback, useRef } from 'react'

export const useThrottleFn = <T>(callback: (...args: T[]) => void, delay: number) => {
  const throttleRef = useRef(false)

  const throttleCallback = useCallback(
    (...args: T[]) => {
      if (!throttleRef.current) {
        callback(...args)
        throttleRef.current = true

        const timer = setTimeout(() => {
          throttleRef.current = false
          clearTimeout(timer)
        }, delay)
      }
    },
    [callback, delay],
  )

  return throttleCallback
}
