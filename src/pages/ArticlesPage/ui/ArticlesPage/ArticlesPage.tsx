import { withAsyncReducers } from 'shared/lib/hocs/withAsyncReducers'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useSelector } from 'react-redux'
import { ArticleList } from 'entities/Article/ui/ArticleList'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect'
import { Page } from 'widgets/Page'
import { useCallback } from 'react'
import { getArticleList, getLoadingArticleList, getViewMode } from '../../model/selectors/articlePageSelectors'
import { articlesPageReducer } from '../../model/slices/articlesPageSlice'

import styles from './ArticlesPage.module.scss'
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage'
import { initArticleList } from '../../model/services/initArticleList'
import { ArticlesPageFilter } from '../ArticlesPageFilter'

const config = {
  reducers: {
    articlesPage: articlesPageReducer,
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

  const handleNextArticles = useCallback(() => {
    dispatch(fetchNextArticlesPage())
  }, [dispatch])

  return (
    <Page onScrollEnd={handleNextArticles} withSaveScroll>
      <ArticlesPageFilter />
      <ArticleList articles={articles} viewMode={view} isLoading={isLoading} className={styles.list} />
    </Page>
  )
}

export default withAsyncReducers(ArticlesPage, config)
