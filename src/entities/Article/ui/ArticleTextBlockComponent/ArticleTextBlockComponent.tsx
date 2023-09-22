import React from 'react'
import cn from 'classnames'
import { Typography } from 'components/Typography'
import { ArticleTextBlock } from '../../model/types/article'

import styles from './ArticleTextBlockComponent.module.scss'

export interface ArticleTextBlockComponentProps {
  block: ArticleTextBlock
  className?: string
}

export const ArticleTextBlockComponent: React.FC<ArticleTextBlockComponentProps> = ({ block, className }) => (
  <div className={cn(styles.articleTextBlock, className)}>
    <Typography variant='subTitle'>{block.title}</Typography>

    {block.paragraphs.map((paragraph) => (
      <Typography key={paragraph} className={styles.articleTextBlock__paragraph}>{paragraph}</Typography>
    ))}

  </div>
)
