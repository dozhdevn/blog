import cn from 'classnames'

import { Typography } from '../Typography'
import { Flex } from '../Flex'

import styles from './Tabs.module.scss'

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
    <Flex gap={12} className={className}>
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
    </Flex>
  )
}
export default Tabs
