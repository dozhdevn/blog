import { StoreSchema } from 'app/store/config/types'
import { ViewModeArticle } from 'entities/Article/model/types/article'

export const getViewMode = (state: StoreSchema) => state.articlePage?.viewMode || ViewModeArticle.List
