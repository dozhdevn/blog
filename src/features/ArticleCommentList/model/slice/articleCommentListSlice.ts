import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { CommentData } from 'entities/Comment'
import { ArticleCommentListSchema } from '../types/ArticleCommentListSchema'
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId'

const initialState: ArticleCommentListSchema = {
  comments: [],
  isLoading: false,
  error: '',
}

const articleDetailsCommentsSlice = createSlice({
  name: 'articleDetailsComments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommentsByArticleId.pending, (state) => {
        state.isLoading = true
        state.error = ''
      })
      .addCase(fetchCommentsByArticleId.fulfilled, (state, action: PayloadAction<CommentData[]>) => {
        state.isLoading = false
        state.comments = action.payload
      })
      .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const { actions: articleDetailsCommentsActions } = articleDetailsCommentsSlice
export const { reducer: articleDetailsCommentsReducer } = articleDetailsCommentsSlice
