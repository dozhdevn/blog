import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'store/config/types'
import { Article } from '../../types/article'

export const fetchArticleById = createAsyncThunk<Article, string, ThunkConfig>(
  'article/fetchArticle',
  async (articleId, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI
    try {
      const response = await extra.api.get(`/articles/${articleId}`)
      if (!response.data) {
        throw new Error()
      }
      return response.data
    } catch (error) {
      return rejectWithValue('error')
    }
  },
)
