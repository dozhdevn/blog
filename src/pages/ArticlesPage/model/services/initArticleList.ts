import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/store/config/types'

import { getSearchParamsFromURL } from 'shared/lib/utils/url/addQueryParams'
import { ArticleSortField, ArticleType } from 'entities/Article'
import { SortOrder } from 'shared/types'
import { getArticlePageInited } from '../selectors/articlePageSelectors'
import { articlesPageActions } from '../slices/articlesPageSlice'
import { fetchArticleList } from './fetchArticleList'

export const initArticleList = createAsyncThunk<void, void, ThunkConfig<string>>(
  'articlePage/initArticlesList',
  async (_, thunkApi) => {
    const { getState, dispatch } = thunkApi
    const inited = getArticlePageInited(getState())

    if (!inited) {
      const sortFromURL = getSearchParamsFromURL().get('sort') as ArticleSortField
      const orderFromURL = getSearchParamsFromURL().get('order') as SortOrder
      const searchFromURL = getSearchParamsFromURL().get('search')
      const typeFromURL = getSearchParamsFromURL().get('type') as ArticleType

      if (sortFromURL) {
        dispatch(articlesPageActions.setSort(sortFromURL))
      }

      if (orderFromURL) {
        dispatch(articlesPageActions.setOrder(orderFromURL))
      }

      if (searchFromURL) {
        dispatch(articlesPageActions.setSearch(searchFromURL))
      }

      if (typeFromURL) {
        dispatch(articlesPageActions.setType(typeFromURL))
      }

      dispatch(articlesPageActions.initState())
      dispatch(fetchArticleList({}))
    }
  },
)
