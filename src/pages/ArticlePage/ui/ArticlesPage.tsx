import { withAsyncReducers } from 'shared/lib/hocs/withAsyncReducers'
import { ArticleViewSelector } from 'features/ArticleViewSelector'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useSelector } from 'react-redux'
import { ViewModeArticle } from 'entities/Article/model/types/article'
import { ArticleList } from 'entities/Article/ui/ArticleList'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect'
import { Page } from 'widgets/Page'
import { useCallback } from 'react'
import { getArticleList, getLoadingArticleList, getViewMode } from '../model/selectors/articlePageSelectors'
import { articlesPageActions, articlesPageReducer } from '../model/slices/articlesPageSlice'

import styles from './ArticlesPage.module.scss'
import { fetchArticleList } from '../model/services/fetchArticleList'
import { fetchNextArticlesPage } from '../model/services/fetchNextArticlesPage'
import { initArticleList } from '../model/services/initArticleList'

const config = {
  reducers: {
    articlePage: articlesPageReducer,
  },
  removeAfterUnmount: false,
}

const ArticlesPage = () => {
  const dispatch = useAppDispatch()

  const articles = useSelector(getArticleList)
  const isLoading = useSelector(getLoadingArticleList)
  const view = useSelector(getViewMode)

  useInitialEffect(() => {
    dispatch(initArticleList())
  })

  const onChangeViewArticles = useCallback(
    (mode: ViewModeArticle) => {
      dispatch(articlesPageActions.setViewMode(mode))
      dispatch(articlesPageActions.resetState())
      dispatch(fetchArticleList())
    },
    [dispatch],
  )

  const handleNextArticles = useCallback(() => {
    dispatch(fetchNextArticlesPage())
  }, [dispatch])

  return (
    <Page onScrollEnd={handleNextArticles} withSaveScroll>
      <ArticleViewSelector viewMode={view} onViewClick={onChangeViewArticles} />
      <ArticleList articles={articles} viewMode={view} isLoading={isLoading} className={styles.list} />
    </Page>
  )
}

export default withAsyncReducers(ArticlesPage, config)
