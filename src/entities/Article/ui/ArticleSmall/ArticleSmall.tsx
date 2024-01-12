import React from 'react'
import cn from 'classnames'
import { Typography } from 'shared/ui/Typography'
import { Link } from 'react-router-dom'
import { Flex } from 'shared/ui/Flex'
import { ArticleProps } from '../../model/types/article'

import styles from './ArticleSmall.module.scss'
import { ArticleViews } from '../ArticleViews'
import ArticleSmallSkeleton from './ArticleSmallSkeleton'

const ArticleSmall: React.FC<ArticleProps> = ({
  article, isLoading, target, className,
}) => {
  if (isLoading) {
    return <ArticleSmallSkeleton />
  }

  return (
    <Flex
      as={Link}
      direction='column'
      justify='center'
      align='stretch'
      gap={16}
      className={cn(styles.article, className)}
      to={`/articles/${article.id}`}
      target={target}
    >
      <img src={article.img} alt={article.title} className={styles.img} />
      <Flex justify='between'>
        <Typography className={styles.types}>{article.type.join(', ')}</Typography>
        <ArticleViews views={article.views} />
      </Flex>
      <Typography>{article.title}</Typography>
    </Flex>
  )
}

export default ArticleSmall
