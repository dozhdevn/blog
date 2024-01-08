import React from 'react'
import cn from 'classnames'

import styles from './Tabs.module.scss'
import { Typography } from '../Typography'

interface Tab<T = string> {
  value: T
  title: string
}

interface Props<T> {
  value: T
  tabs: Tab<T>[]
  onChange: (value: T) => void
  className?: string
}

const Tabs = <T,>({
  value, tabs, onChange, className,
}: Props<T>) => {
  const handleClickTab = (value: T) => () => {
    onChange(value)
  }
  return (
    <div className={cn(styles.tabs, className)}>
      {tabs.map((tab) => {
        const selected = tab.value === value
        return (
          <div
            key={tab.title}
            className={cn(styles.tab, selected && styles.selected)}
            role='tab'
            tabIndex={0}
            onClick={handleClickTab(tab.value)}
          >
            <Typography className={styles.title}>{tab.title}</Typography>
          </div>
        )
      })}
    </div>
  )
}
export default Tabs
