import { createSlice } from '@reduxjs/toolkit'
import { ArticleDetailsSchema } from '../types/articleDetailsSchema'
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById'

const initialState: ArticleDetailsSchema = {
  article: null,
  isLoading: false,
  error: '',
}

export const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchArticleById.pending, (state) => {
      state.isLoading = true
      state.error = ''
    })
    builder.addCase(fetchArticleById.fulfilled, (state, action) => {
      state.isLoading = false
      state.article = action.payload
    })
    builder.addCase(fetchArticleById.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })
  },
})

export const { actions: articleActions, reducer: articleReducer } = articleSlice
