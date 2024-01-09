import React, { useEffect } from 'react'
import { ArticleDetails, articleReducer } from 'entities/Article'
import { CommentList } from 'entities/Comment'
import { useParams } from 'react-router-dom'

import { Typography } from 'shared/ui/Typography'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { fetchCommentsByArticleId } from 'features/ArticleCommentList'
import { useSelector } from 'react-redux'
import {
  getArticleComments,
  getArticleCommentsIsLoading,
} from 'features/ArticleCommentList/model/selectors/articleComments'
import { AddCommentForm } from 'features/addCommentForm'
import { DynamicModuleLoader } from 'widgets/layouts/DynamicModuleLoader'
import { Page } from 'widgets/Page'
import { ArticleRecommendationList } from 'features/ArticleRecommendationList/ui'
import { fetchArticleRecommendation } from 'features/ArticleRecommendationList/model/services/fetchArticleRecommendations'
import styles from './ArticleDetailsPage.module.scss'
import { addCommentForArticle } from '../model/services/addCommentsForArticle'
import { articleDetailsPageReducer } from '../model/slices'

const config = {
  reducers: {
    article: articleReducer,
    articleDetailsPage: articleDetailsPageReducer,
  },
}

const ArticleDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()

  const dispatch = useAppDispatch()

  const comments = useSelector(getArticleComments)
  const loadingComments = useSelector(getArticleCommentsIsLoading)

  useEffect(() => {
    dispatch(fetchCommentsByArticleId(id))
    dispatch(fetchArticleRecommendation())
  }, [dispatch, id])

  const onSendComment = (value: string) => {
    dispatch(addCommentForArticle(value))
  }

  return (
    <DynamicModuleLoader {...config}>
      <Page>
        <ArticleDetails id={id} />

        <ArticleRecommendationList className={styles.recommendation} />

        <Typography variant='subTitle' as='h3' className={styles.commentTitle}>
          Комментарии
        </Typography>
        <AddCommentForm onSendComment={onSendComment} className={styles.form} />
        <CommentList className={styles.commentList} comments={comments} isLoading={loadingComments} />
      </Page>
    </DynamicModuleLoader>
  )
}

export default ArticleDetailsPage
