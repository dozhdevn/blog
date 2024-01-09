import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Article } from 'entities/Article/model/types/article'
import { ArticleRecommendationsListSchema } from '../types/ArticleRecommendationListSchema'
import { fetchArticleRecommendation } from '../services/fetchArticleRecommendations'

const initialState: ArticleRecommendationsListSchema = {
  recommendation: [],
  isLoading: false,
  error: '',
}

const articleRecommendationsSlice = createSlice({
  name: 'articleRecommendation',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleRecommendation.pending, (state) => {
        state.isLoading = true
        state.error = ''
      })
      .addCase(fetchArticleRecommendation.fulfilled, (state, action: PayloadAction<Article[]>) => {
        state.isLoading = false
        state.recommendation = action.payload
      })
      .addCase(fetchArticleRecommendation.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const { actions: articleRecommendationsActions } = articleRecommendationsSlice
export const { reducer: articleRecommendationsReducer } = articleRecommendationsSlice
