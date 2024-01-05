import { Article, ViewModeArticle } from 'entities/Article/model/types/article'

export interface ArticlesPageSchema {
  articles: Article[]
  viewMode: ViewModeArticle
  isLoading: boolean
  error?: string
  page: number
  limit: number
  hasMore: boolean
  _inited: boolean
}
