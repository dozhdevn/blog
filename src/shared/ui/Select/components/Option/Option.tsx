import React from 'react'

import { Flex } from 'shared/ui/Flex'
import styles from './Option.module.scss'

export interface OptionProps {
  onClick: () => void
  children?: React.ReactNode
}

export const Option = ({ onClick, children }: OptionProps) => (
  <Flex as='li' onClick={onClick} role='menuitem' className={styles.option}>
    {children}
  </Flex>
)
