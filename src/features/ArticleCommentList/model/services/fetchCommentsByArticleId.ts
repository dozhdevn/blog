import { createAsyncThunk } from '@reduxjs/toolkit'
import { CommentData } from 'entities/Comment'
import { ThunkConfig } from 'app/store/config/types'

export const fetchCommentsByArticleId = createAsyncThunk<CommentData[], string | undefined, ThunkConfig<string>>(
  'articleDetails/fetchCommentsByArticleId',
  async (articleId, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi

    if (!articleId) {
      return rejectWithValue('error')
    }

    try {
      const response = await extra.api.get<CommentData[]>('/comments', {
        params: {
          articleId,
          _expand: 'user',
        },
      })

      if (!response.data) {
        throw new Error()
      }
      return response.data
    } catch (e) {
      return rejectWithValue('error')
    }
  },
)
