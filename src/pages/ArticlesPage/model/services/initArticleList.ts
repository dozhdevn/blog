import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/store/config/types'

import { getArticlePageInited } from '../selectors/articlePageSelectors'
import { articlesPageActions } from '../slices/articlesPageSlice'
import { fetchArticleList } from './fetchArticleList'

export const initArticleList = createAsyncThunk<void, void, ThunkConfig<string>>(
  'articlePage/initArticlesList',
  async (_, thunkApi) => {
    const { getState, dispatch } = thunkApi
    const inited = getArticlePageInited(getState())

    if (!inited) {
      dispatch(articlesPageActions.initState())
      dispatch(fetchArticleList({}))
    }
  },
)
