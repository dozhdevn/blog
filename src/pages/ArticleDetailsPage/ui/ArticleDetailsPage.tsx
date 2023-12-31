import React, { useEffect } from 'react'
import { withAsyncReducers } from 'shared/lib/hocs/withAsyncReducers'
import { ArticleDetails, articleReducer } from 'entities/Article'
import { CommentList } from 'entities/Comment'
import { useParams } from 'react-router-dom'

import { Typography } from 'shared/ui/Typography'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { articleDetailsCommentsReducer, fetchCommentsByArticleId } from 'features/ArticleCommentList'
import { useSelector } from 'react-redux'
import {
  getArticleComments,
  getArticleCommentsIsLoading,
} from 'features/ArticleCommentList/model/selectors/articleComments'
import { AddCommentForm } from 'features/addCommentForm'
import { DynamicModuleLoader } from 'widgets/layouts/DynamicModuleLoader'
import { Page } from 'widgets/Page'
import styles from './ArticleDetailsPage.module.scss'
import { addCommentForArticle } from '../model/services/addCommentsForArticle'

const config = {
  reducers: {
    article: articleReducer,
    articleComments: articleDetailsCommentsReducer,
  },
}

const ArticleDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()

  const dispatch = useAppDispatch()

  const comments = useSelector(getArticleComments)
  const loadingComments = useSelector(getArticleCommentsIsLoading)

  useEffect(() => {
    dispatch(fetchCommentsByArticleId(id))
  }, [dispatch, id])

  const onSendComment = (value: string) => {
    dispatch(addCommentForArticle(value))
  }

  return (
    <DynamicModuleLoader {...config}>
      <Page>
        <ArticleDetails id={id} />

        <Typography variant='subTitle' as='h3' className={styles.commentTitle}>
          Комментарии
        </Typography>
        <AddCommentForm onSendComment={onSendComment} className={styles.form} />
        <CommentList className={styles.commentList} comments={comments} isLoading={loadingComments} />
      </Page>
    </DynamicModuleLoader>
  )
}

export default withAsyncReducers(ArticleDetailsPage, config)
