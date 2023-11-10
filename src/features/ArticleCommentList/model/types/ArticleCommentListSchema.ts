import { CommentData } from 'entities/Comment'

export interface ArticleCommentListSchema {
  comments: CommentData[]
  isLoading?: boolean
  error?: string
}
