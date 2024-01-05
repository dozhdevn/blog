import React, { useEffect, useRef } from 'react'
import cn from 'classnames'

import styles from './Page.module.scss'

interface Props {
  className?: string
  children: React.ReactNode
  onScrollEnd?: () => void
}

const Page: React.FC<Props> = ({ className, onScrollEnd, children }) => {
  const rootRef = useRef<HTMLDivElement | null>(null)
  const triggerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const triggerElement = triggerRef.current as HTMLDivElement

    const options = {
      root: rootRef.current,
      rootMargin: '0px',
      threshold: 1.0,
    }

    const callback = ([entry]: IntersectionObserverEntry[]) => {
      if (entry.isIntersecting) {
        onScrollEnd?.()
      }
    }

    const observer = new IntersectionObserver(callback, options)

    observer.observe(triggerElement)

    return () => {
      observer.unobserve(triggerElement)
    }
  }, [onScrollEnd])

  return (
    <main className={cn(styles.page, className)} ref={rootRef}>
      {children}
      <div ref={triggerRef} />
    </main>
  )
}

export default Page
