import { StoreSchema } from 'app/store/config/types'
import { ViewModeArticle, ArticleSortField, ArticleType } from 'entities/Article'

export const getViewMode = (state: StoreSchema) => state.articlesPage?.viewMode || ViewModeArticle.List

export const getLoadingArticleList = (state: StoreSchema) => state.articlesPage?.isLoading || false

export const getArticleList = (state: StoreSchema) => state.articlesPage?.articles || []

export const getErrorArticleList = (state: StoreSchema) => state.articlesPage?.error || ''

export const getPageArticleList = (state: StoreSchema) => state.articlesPage?.page || 1

export const getLimitArticleList = (state: StoreSchema) => state.articlesPage?.limit || 3

export const getHasMoreArticleList = (state: StoreSchema) => state.articlesPage?.hasMore || false

export const getArticlePageInited = (state: StoreSchema) => state.articlesPage?._inited || false

export const getSortArticleList = (state: StoreSchema) => state.articlesPage?.sort || ArticleSortField.CREATED

export const getOrderArticleList = (state: StoreSchema) => state.articlesPage?.order || 'asc'

export const getSearchArticleList = (state: StoreSchema) => state.articlesPage?.search || ''

export const getTypeArticleList = (state: StoreSchema) => state.articlesPage?.type || ArticleType.ALL
