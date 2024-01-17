import {
  Article, ArticleSortField, ArticleType, ViewModeArticle,
} from 'entities/Article'
import { SortOrder } from 'shared/types'

export interface ArticlesPageSchema {
  articles: Article[]
  isLoading: boolean
  error?: string
  page: number
  limit: number
  hasMore: boolean
  _inited: boolean

  // filter
  viewMode: ViewModeArticle
  sort: ArticleSortField
  order: SortOrder
  search: string
  type: ArticleType
}
