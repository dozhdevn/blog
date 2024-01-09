import { StoreSchema } from 'app/store/config/types'

export const getArticleComments = (state: StoreSchema) =>
  state.articleDetailsPage?.articleDetailsCommentsReducer.comments || []

export const getArticleCommentsIsLoading = (state: StoreSchema) =>
  state.articleDetailsPage?.articleDetailsCommentsReducer?.isLoading || false

export const getArticleCommentsError = (state: StoreSchema) =>
  state.articleDetailsPage?.articleDetailsCommentsReducer?.error || ''
