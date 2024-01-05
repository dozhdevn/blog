import { ViewModeArticle } from '../model/types/article'

export const getQuantityArticles = (view: ViewModeArticle) => (view === ViewModeArticle.List ? 3 : 12)
