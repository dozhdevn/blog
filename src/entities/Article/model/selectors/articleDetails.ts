import { StoreSchema } from 'app/store/config/types'

export const getArticle = (state: StoreSchema) => state.article?.article
export const getArticleLoading = (state: StoreSchema) => state.article?.isLoading
export const getArticleError = (state: StoreSchema) => state.article?.error
