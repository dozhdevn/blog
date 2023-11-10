import { User } from 'entities/User'

export interface CommentData {
  id: string
  text: string
  user: User
}
