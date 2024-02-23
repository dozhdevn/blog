import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import React, { useEffect } from 'react'
import cn from 'classnames'
import { useSelector } from 'react-redux'
import { Avatar } from 'shared/ui/Avatar'
import { Typography } from 'shared/ui/Typography'
import { Flex } from 'shared/ui/Flex'

import { ArticleBlock } from '../../model/types/article'
import { getArticle, getArticleError, getArticleLoading } from '../../model/selectors/articleDetails'
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById'
import { ArticleSkeleton } from '../ArticleSkeleton/ArticleSkeleton'
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent'
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent'
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent'
import { ArticleBlockType } from '../../model/consts/consts'

import styles from './ArticleDetails.module.scss'

const renderBlock = (block: ArticleBlock) => {
  const { type } = block
  if (type === ArticleBlockType.CODE) {
    return <ArticleCodeBlockComponent key={block.id} block={block} className={styles.articleBlock} />
  }

  if (type === ArticleBlockType.TEXT) {
    return <ArticleTextBlockComponent key={block.id} block={block} className={styles.articleBlock} />
  }

  if (type === ArticleBlockType.IMAGE) {
    return <ArticleImageBlockComponent key={block.id} block={block} className={styles.articleBlock} />
  }

  return null
}

export interface ArticleDetailsProps {
  id: string
  className?: string
}

export const ArticleDetails: React.FC<ArticleDetailsProps> = ({ id, className }) => {
  const dispatch = useAppDispatch()

  const article = useSelector(getArticle)
  const isLoading = useSelector(getArticleLoading)
  const error = useSelector(getArticleError)

  useEffect(() => {
    dispatch(fetchArticleById(id))
  }, [id, dispatch])

  if (isLoading) {
    return <ArticleSkeleton />
  }

  if (error) {
    return (
      <div className={cn(styles.articleDetails, className)}>
        <Typography color='error' variant='title'>
          Произошла ошибка
        </Typography>
        <Typography color='error' variant='subTitle'>
          {error}
        </Typography>
      </div>
    )
  }

  return (
    <div className={cn(styles.articleDetails, className)}>
      <Flex gap={12} className={styles.articleDetails__header}>
        <Avatar src={article?.user.avatar} size={32} />
        <Typography>{article?.user.username}</Typography>
        <Typography>{article?.createdAt}</Typography>
      </Flex>
      <Typography as='h2' variant='title' className={styles.articleDetails__title}>
        {article?.title}
      </Typography>
      <Typography as='h3' variant='subTitle'>
        {article?.subtitle}
      </Typography>

      <Flex justify='center'>
        <img src={article?.img} alt={article?.title} className={styles.articleDetails__img} />
      </Flex>

      {article?.blocks.map(renderBlock)}
    </div>
  )
}
