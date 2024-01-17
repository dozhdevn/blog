import React, { useCallback } from 'react'

import { ArticleViewSelector } from 'features/ArticleViewSelector'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { SortOrder } from 'shared/types'
import { ArticleSortSelector } from 'features/ArticleSortSelector'
import { Input } from 'shared/ui/Input'
import { useDebounceFn } from 'shared/lib/hooks/useDebounceFn'
import { ArticleTypeTabs } from 'features/ArticleTypeTabs'
import { Flex } from 'shared/ui/Flex'
import { ArticleSortField, ArticleType, ViewModeArticle } from 'entities/Article'
import {
  getOrderArticleList,
  getSearchArticleList,
  getSortArticleList,
  getTypeArticleList,
  getViewMode,
} from '../../model/selectors/articlePageSelectors'
import { articlesPageActions } from '../../model/slices/articlesPageSlice'
import { fetchArticleList } from '../../model/services/fetchArticleList'

interface Props {
  className?: string
}

const ArticlesPageFilter: React.FC<Props> = ({ className }) => {
  const dispatch = useAppDispatch()

  const view = useSelector(getViewMode)
  const sort = useSelector(getSortArticleList)
  const order = useSelector(getOrderArticleList)
  const search = useSelector(getSearchArticleList)
  const type = useSelector(getTypeArticleList)

  const fetchData = useCallback(() => {
    dispatch(fetchArticleList({ replace: true }))
  }, [dispatch])

  const debouncedFetchData = useDebounceFn(fetchData, 500)

  const onChangeViewArticles = useCallback(
    (mode: ViewModeArticle) => {
      dispatch(articlesPageActions.setViewMode(mode))
      dispatch(articlesPageActions.resetState())
      fetchData()
    },
    [dispatch, fetchData],
  )

  const onChangeSortArticles = useCallback(
    (sort: ArticleSortField) => {
      dispatch(articlesPageActions.setSort(sort))
      fetchData()
    },
    [dispatch, fetchData],
  )

  const onChangeOrderArticles = useCallback(
    (order: SortOrder) => {
      dispatch(articlesPageActions.setOrder(order))
      fetchData()
    },
    [dispatch, fetchData],
  )

  const onChangeSearchArticles = useCallback(
    (value: string) => {
      dispatch(articlesPageActions.setSearch(value))
      debouncedFetchData()
    },
    [dispatch, debouncedFetchData],
  )

  const onChangeTypeArticles = useCallback(
    (type: ArticleType) => {
      dispatch(articlesPageActions.setType(type))
      fetchData()
    },
    [dispatch, fetchData],
  )

  return (
    <Flex direction='column' align='stretch' gap={24} className={className}>
      <Flex justify='between'>
        <ArticleSortSelector
          sort={sort}
          order={order}
          onChangeSort={onChangeSortArticles}
          onChangeOrder={onChangeOrderArticles}
        />
        <ArticleViewSelector viewMode={view} onViewClick={onChangeViewArticles} />
      </Flex>

      <Input placeholder='Поиск' value={search} onChange={onChangeSearchArticles} />

      <ArticleTypeTabs value={type} onChange={onChangeTypeArticles} />
    </Flex>
  )
}

export default ArticlesPageFilter
