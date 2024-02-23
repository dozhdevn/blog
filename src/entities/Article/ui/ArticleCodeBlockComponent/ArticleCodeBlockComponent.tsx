import React from 'react'
import cn from 'classnames'
import { Code } from 'shared/ui/Code'

import { ArticleCodeBlock } from '../../model/types/article'

import styles from './ArticleCodeBlockComponent.module.scss'

export interface ArticleCodeBlockComponentProps {
  block: ArticleCodeBlock
  className?: string
}

export const ArticleCodeBlockComponent: React.FC<ArticleCodeBlockComponentProps> = ({ block, className }) => (
  <div className={cn(styles.articleCodeBlock, className)}>
    <Code code={block.code} />
  </div>
)
