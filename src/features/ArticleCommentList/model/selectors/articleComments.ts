import { StoreSchema } from 'store/config/types'

export const getArticleComments = (state: StoreSchema) => state.articleComments?.comments || []
export const getArticleCommentsIsLoading = (state: StoreSchema) => state.articleComments?.isLoading || false
export const getArticleCommentsError = (state: StoreSchema) => state.articleComments?.error || ''
