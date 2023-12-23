import React from 'react'
import cn from 'classnames'

import styles from './Page.module.scss'

interface Props {
  className?: string
  children: React.ReactNode
}

const Page: React.FC<Props> = ({ className, children }) => (
  <main className={cn(styles.page, className)}>{children}</main>
)

export default Page
