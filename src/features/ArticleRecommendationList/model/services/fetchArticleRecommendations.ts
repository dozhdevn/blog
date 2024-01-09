import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/store/config/types'
import { Article } from 'entities/Article/model/types/article'

export const fetchArticleRecommendation = createAsyncThunk<Article[], void, ThunkConfig<string>>(
  'articlePage/fetchArticleRecommendation',
  async (_, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi

    try {
      const response = await extra.api.get<Article[]>('/articles', {
        params: {
          _expand: 'user',
          _limit: 4,
        },
      })

      return response.data
    } catch (error) {
      return rejectWithValue('error')
    }
  },
)
