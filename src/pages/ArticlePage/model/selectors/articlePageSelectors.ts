import { StoreSchema } from 'app/store/config/types'
import { ViewModeArticle } from 'entities/Article/model/types/article'

export const getViewMode = (state: StoreSchema) => state.articlePage?.viewMode || ViewModeArticle.List

export const getLoadingArticleList = (state: StoreSchema) => state.articlePage?.isLoading || false

export const getArticleList = (state: StoreSchema) => state.articlePage?.articles || []

export const getErrorArticleList = (state: StoreSchema) => state.articlePage?.error || ''
