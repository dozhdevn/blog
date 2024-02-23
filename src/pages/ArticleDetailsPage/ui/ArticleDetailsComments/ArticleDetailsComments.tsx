import cn from 'classnames'
import { Typography } from 'shared/ui/Typography'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { addCommentForArticle } from 'pages/ArticleDetailsPage/model/services/addCommentsForArticle'
import { AddCommentForm } from 'features/addCommentForm'
import { CommentList } from 'entities/Comment'
import {
  getArticleComments,
  getArticleCommentsIsLoading,
} from 'features/ArticleCommentList/model/selectors/articleComments'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchCommentsByArticleId } from 'features/ArticleCommentList'

import styles from './ArticleDetailsComments.module.scss'

interface Props {
  id: string
  className?: string
}

const ArticleDetailsComments: React.FC<Props> = ({ id, className }) => {
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
    <div className={cn(className)}>
      <Typography variant='subTitle' as='h3' className={styles.commentTitle}>
        Комментарии
      </Typography>

      <AddCommentForm onSendComment={onSendComment} className={styles.form} />

      <CommentList className={styles.commentList} comments={comments} isLoading={loadingComments} />
    </div>
  )
}

export default ArticleDetailsComments
