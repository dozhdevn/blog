import { Article } from './article'

export interface ArticleDetailsSchema {
  article: Article | null
  isLoading: boolean
  error?: string
}
