import React from 'react'
import { Avatar } from 'shared/ui/Avatar'
import { Typography } from 'shared/ui/Typography'
import { Link } from 'react-router-dom'
import { Flex } from 'shared/ui/Flex'
import { getRouteProfile } from 'shared/constants/routing'

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
    <Flex gap={16} align='start' className={className}>
      <Link to={getRouteProfile(comment.user.id)}>
        <Avatar size={40} src={comment.user.avatar} />
      </Link>
      <div className={styles.content}>
        <Typography className={styles.username}>{`@${comment.user.username}`}</Typography>
        <Typography as='p'>{comment.text}</Typography>
      </div>
    </Flex>
  )
}
