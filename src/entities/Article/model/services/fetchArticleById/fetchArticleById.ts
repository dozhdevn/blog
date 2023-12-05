import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/store/config/types'
import { Article } from '../../types/article'

export const fetchArticleById = createAsyncThunk<Article, string, ThunkConfig>(
  'articleDetails/fetchArticle',
  async (articleId, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI

    try {
      const response = await extra.api.get(`/articles/${articleId}`, {
        params: {
          _expand: 'user',
        },
      })
      if (!response.data) {
        throw new Error()
      }
      return response.data
    } catch (error) {
      return rejectWithValue('error')
    }
  },
)
