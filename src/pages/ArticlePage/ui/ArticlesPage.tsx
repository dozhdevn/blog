import { withAsyncReducers } from 'shared/lib/hocs/withAsyncReducers'
import { ArticleViewSelector } from 'features/ArticleViewSelector'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useSelector } from 'react-redux'
import { ViewModeArticle } from 'entities/Article/model/types/article'
import { ArticleList } from 'entities/Article/ui/ArticleList'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect'
import { getArticleList, getLoadingArticleList, getViewMode } from '../model/selectors/articlePageSelectors'
import { articlesPageActions, articlesPageReducer } from '../model/slices/articlesPageSlice'

import styles from './ArticlesPage.module.scss'
import { fetchArticleList } from '../model/services/fetchArticleList'

const config = {
  reducers: {
    articlePage: articlesPageReducer,
  },
}

const ArticlesPage = () => {
  const dispatch = useAppDispatch()

  const articles = useSelector(getArticleList)
  const isLoading = useSelector(getLoadingArticleList)
  const view = useSelector(getViewMode)

  useInitialEffect(() => {
    dispatch(fetchArticleList())
  })

  const onChangeViewArticles = (mode: ViewModeArticle) => {
    dispatch(articlesPageActions.setViewMode(mode))
  }

  return (
    <>
      <ArticleViewSelector viewMode={view} onViewClick={onChangeViewArticles} />
      <ArticleList articles={articles} viewMode={view} isLoading={isLoading} className={styles.list} />
    </>
  )
}

export default withAsyncReducers(ArticlesPage, config)
