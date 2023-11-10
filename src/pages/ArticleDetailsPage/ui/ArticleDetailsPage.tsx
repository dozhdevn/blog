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
import styles from './ArticleDetailsPage.module.scss'

const ArticleDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()

  const dispatch = useAppDispatch()

  const comments = useSelector(getArticleComments)
  const loadingComments = useSelector(getArticleCommentsIsLoading)

  useEffect(() => {
    dispatch(fetchCommentsByArticleId(id))
  }, [dispatch, id])

  return (
    <div>
      <ArticleDetails id={id} />

      <Typography variant='subTitle' className={styles.commentTitle}>
        Комментарии
      </Typography>

      <CommentList className={styles.commentList} comments={comments} isLoading={loadingComments} />
    </div>
  )
}

const config = {
  reducers: {
    article: articleReducer,
    articleComments: articleDetailsCommentsReducer,
  },
}

export default withAsyncReducers(ArticleDetailsPage, config)
