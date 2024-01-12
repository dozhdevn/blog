import React from 'react'

import { Flex } from 'shared/ui/Flex'
import styles from './Option.module.scss'

export interface OptionProps {
  onClick: () => void
}

export const Option: React.FC<OptionProps> = ({ onClick, children }) => (
  <Flex as='li' onClick={onClick} role='menuitem' className={styles.option}>
    {children}
  </Flex>
)
