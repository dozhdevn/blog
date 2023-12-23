import React from 'react'
import cn from 'classnames'
import { Typography } from 'shared/ui/Typography'
import { Link } from 'react-router-dom'
import { ArticleProps } from '../../model/types/article'

import styles from './ArticleSmall.module.scss'
import { ArticleViews } from '../ArticleViews'
import ArticleSmallSkeleton from './ArticleSmallSkeleton'

const ArticleSmall: React.FC<ArticleProps> = ({ article, isLoading, className }) => {
  if (isLoading) {
    return <ArticleSmallSkeleton />
  }

  return (
    <Link className={cn(styles.article, className)} to={`/articles/${article.id}`}>
      <img src={article.img} alt={article.title} className={styles.img} />
      <div className={styles.info}>
        <Typography className={styles.types}>{article.type.join(', ')}</Typography>
        <ArticleViews views={article.views} />
      </div>
      <Typography>{article.title}</Typography>
    </Link>
  )
}

export default ArticleSmall
