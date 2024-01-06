import { useEffect } from 'react'

export const useInfiniteScroll = (
  rootRef: React.RefObject<Element>,
  triggerRef: React.RefObject<Element>,
  callback?: () => void,
) => {
  useEffect(() => {
    const triggerElement = triggerRef.current as HTMLDivElement

    const options = {
      root: rootRef.current,
      rootMargin: '0px',
      threshold: 1.0,
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        callback?.()
      }
    }, options)

    observer.observe(triggerElement)

    return () => {
      observer.unobserve(triggerElement)
    }
  }, [callback, rootRef, triggerRef])
}
