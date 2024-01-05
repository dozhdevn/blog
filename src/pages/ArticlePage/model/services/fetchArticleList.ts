import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/store/config/types'
import { Article } from 'entities/Article/model/types/article'
import { getLimitArticleList } from '../selectors/articlePageSelectors'

export const fetchArticleList = createAsyncThunk<Article[], number | undefined, ThunkConfig<string>>(
  'articlePage/fetchArticlesList',
  async (page = 1, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi
    const limit = getLimitArticleList(getState())

    try {
      const response = await extra.api.get<Article[]>('/articles', {
        params: {
          _expand: 'user',
          _page: page,
          _limit: limit,
        },
      })

      return response.data
    } catch (error) {
      return rejectWithValue('error')
    }
  },
)
