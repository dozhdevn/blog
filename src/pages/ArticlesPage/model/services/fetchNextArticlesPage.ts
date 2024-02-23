import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/store/config/types'

import { getHasMoreArticleList, getLoadingArticleList, getPageArticleList } from '../selectors/articlePageSelectors'
import { articlesPageActions } from '../slices/articlesPageSlice'

import { fetchArticleList } from './fetchArticleList'

export const fetchNextArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
  'articlePage/fetchNextArticlesPage',
  async (_, thunkApi) => {
    const { getState, dispatch } = thunkApi
    const page = getPageArticleList(getState())
    const loading = getLoadingArticleList(getState())
    const hasMore = getHasMoreArticleList(getState())

    if (hasMore && !loading) {
      const currentPage = page + 1
      dispatch(articlesPageActions.setPage(currentPage))
      dispatch(fetchArticleList({}))
    }
  },
)
