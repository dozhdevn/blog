import React from 'react'
import cn from 'classnames'

import CopyIcon from 'shared/assets/icons/svg/copy.svg'

import { IconButton } from 'shared/ui/IconButton'

import styles from './Code.module.scss'

export interface CodeProps {
  code: string
  className?: string
}

export const Code: React.FC<CodeProps> = ({ code, className }) => {
  const copyCode = () => {
    navigator.clipboard.writeText(code)
  }

  return (
    <pre className={cn(styles.codeWrap, className)}>
      <IconButton className={styles.copyBtn} onClick={copyCode}>
        <CopyIcon />
      </IconButton>
      <code>{code}</code>
    </pre>
  )
}
