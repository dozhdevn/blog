import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/store/config/types'
import { Article } from 'entities/Article/model/types/article'

export const fetchArticleList = createAsyncThunk<Article[], void, ThunkConfig<string>>(
  'articlePage/fetchArticlesList',
  async (_, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi

    try {
      const response = await extra.api.get<Article[]>('/articles', {
        params: {
          _expand: 'user',
        },
      })

      return response.data
    } catch (error) {
      return rejectWithValue('error')
    }
  },
)
