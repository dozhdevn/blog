import { StoreSchema } from 'app/store/config/types'

export const getArticleRecommendations = (state: StoreSchema) =>
  state.articleDetailsPage?.articleRecommendationsReducer.recommendation || []

export const getLoadingArticleRecommendations = (state: StoreSchema) =>
  state.articleDetailsPage?.articleRecommendationsReducer.isLoading || false

export const getErrorArticleRecommendations = (state: StoreSchema) =>
  state.articleDetailsPage?.articleRecommendationsReducer.error || ''
