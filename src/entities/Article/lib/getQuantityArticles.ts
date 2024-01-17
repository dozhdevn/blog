import { ViewModeArticle } from '../model/consts/consts'

export const getQuantityArticles = (view: ViewModeArticle) => (view === ViewModeArticle.List ? 3 : 12)
