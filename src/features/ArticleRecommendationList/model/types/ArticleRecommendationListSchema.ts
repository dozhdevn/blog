import { Article } from 'entities/Article/model/types/article'

export interface ArticleRecommendationsListSchema {
  recommendation: Article[]
  isLoading?: boolean
  error?: string
}
