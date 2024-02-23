import React from 'react'
import cn from 'classnames'

import { CommentData } from '../../model/types/comment'
import { Comment } from '../Comment/Comment'

import styles from './CommentList.module.scss'

export interface CommentListProps {
  comments: CommentData[]
  isLoading?: boolean
  className?: string
}

export const CommentList: React.FC<CommentListProps> = ({ comments, isLoading, className }) => (
  <div className={cn(styles.commentList, className)}>
    {comments.map((comment) => (
      <Comment key={comment.id} comment={comment} isLoading={isLoading} className={styles.comment} />
    ))}
  </div>
)
