import React from 'react'
import cn from 'classnames'
import { Avatar } from 'components/Avatar'
import { Typography } from 'components/Typography'
import { CommentData } from '../../model/types/comment'

import styles from './Comment.module.scss'
import { CommentSkeleton } from './CommentSkeleton'

export interface CommentProps {
  comment: CommentData
  isLoading?: boolean
  className?: string
}

export const Comment: React.FC<CommentProps> = ({ comment, isLoading, className }) => {
  if (isLoading) {
    return <CommentSkeleton className={className} />
  }

  return (
    <div className={cn(styles.comment, className)}>
      <Avatar size={40} src={comment.user.avatar} />
      <div className={styles.content}>
        <Typography className={styles.username}>{`@${comment.user.username}`}</Typography>
        <Typography>{comment.text}</Typography>
      </div>
    </div>
  )
}
