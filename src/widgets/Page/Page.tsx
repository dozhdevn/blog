import React, { useRef } from 'react'
import cn from 'classnames'
import { useThrottleFn } from 'shared/lib/hooks/useThrottleFn'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { scrollAction } from 'features/ScrollPosition'
import { useLocation } from 'react-router-dom'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect'
import { useSelector } from 'react-redux'
import { getScrollPosition } from 'features/ScrollPosition/model/selectors/scrollPosition'
import { StoreSchema } from 'app/store/config/types'
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll'

import styles from './Page.module.scss'

interface Props {
  className?: string
  children: React.ReactNode
  withSaveScroll?: boolean
  onScrollEnd?: () => void
}

const Page: React.FC<Props> = ({
  className, onScrollEnd, withSaveScroll = false, children,
}) => {
  const dispatch = useAppDispatch()
  const { pathname } = useLocation()
  const rootRef = useRef<HTMLDivElement | null>(null)
  const triggerRef = useRef<HTMLDivElement | null>(null)

  const scrollPosition = useSelector((state: StoreSchema) => getScrollPosition(state, pathname))

  useInfiniteScroll(rootRef, triggerRef, onScrollEnd)

  const scrollHandler = useThrottleFn((e: React.UIEvent<HTMLDivElement>) => {
    const position = e.currentTarget.scrollTop
    dispatch(
      scrollAction.setScrollPosition({
        pathname,
        position,
      }),
    )
  }, 300)

  useInitialEffect(() => {
    if (withSaveScroll && rootRef.current) {
      rootRef.current.scrollTop = scrollPosition
    }
  })

  return (
    <main className={cn(styles.page, className)} ref={rootRef} onScroll={scrollHandler}>
      {children}
      <div ref={triggerRef} />
    </main>
  )
}

export default Page
