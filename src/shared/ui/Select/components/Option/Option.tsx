import React from 'react'

import styles from './Option.module.scss'

export interface OptionProps {
  onClick: () => void
}

export const Option: React.FC<OptionProps> = ({ onClick, children }) => (
  <li onClick={onClick} role='menuitem' className={styles.option}>
    {children}
  </li>
)
