import { StoreSchema } from 'app/store/config/types'
import { ViewModeArticle } from 'entities/Article/model/types/article'

export const getViewMode = (state: StoreSchema) => state.articlePage?.viewMode || ViewModeArticle.List

export const getLoadingArticleList = (state: StoreSchema) => state.articlePage?.isLoading || false

export const getArticleList = (state: StoreSchema) => state.articlePage?.articles || []

export const getErrorArticleList = (state: StoreSchema) => state.articlePage?.error || ''

export const getPageArticleList = (state: StoreSchema) => state.articlePage?.page || 1

export const getLimitArticleList = (state: StoreSchema) => state.articlePage?.limit || 3

export const getHasMoreArticleList = (state: StoreSchema) => state.articlePage?.hasMore || false

export const getArticlePageInited = (state: StoreSchema) => state.articlePage?._inited || false
