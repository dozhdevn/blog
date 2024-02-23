import React from 'react'
import cn from 'classnames'
import { Typography } from 'shared/ui/Typography'

import { ArticleImageBlock } from '../../model/types/article'

import styles from './ArticleImageBlockComponent.module.scss'

export interface ArticleImageBlockComponentProps {
  className?: string
  block: ArticleImageBlock
}

export const ArticleImageBlockComponent: React.FC<ArticleImageBlockComponentProps> = ({ block, className }) => (
  <div className={cn(styles.articleImageBlock, className)}>
    <img src={block.src} alt={block.title} className={styles.articleImageBlock__img} />
    <Typography align='center' className={styles.articleImageBlock__title}>
      {block.title}
    </Typography>
  </div>
)
