import { withAsyncReducers } from 'shared/lib/hocs/withAsyncReducers'
import { ArticleViewSelector } from 'features/ArticleViewSelector'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useSelector } from 'react-redux'
import { ViewModeArticle } from 'entities/Article/model/types/article'
import { getViewMode } from '../model/selectors/articlePageSelectors'
import { articlesPageActions, articlesPageReducer } from '../model/slices/articlesPageSlice'

const config = {
  reducers: {
    articlePage: articlesPageReducer,
  },
}

const ArticlesPage = () => {
  const dispatch = useAppDispatch()
  const view = useSelector(getViewMode)

  const onChangeViewArticles = (mode: ViewModeArticle) => {
    dispatch(articlesPageActions.setViewMode(mode))
  }

  return <ArticleViewSelector viewMode={view} onViewClick={onChangeViewArticles} />
}

export default withAsyncReducers(ArticlesPage, config)
