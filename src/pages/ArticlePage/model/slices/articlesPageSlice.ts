import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ViewModeArticle } from 'entities/Article/model/types/article'
import { ArticlesPageSchema } from '../types/articlesPageSchema'

const initialState: ArticlesPageSchema = {
  articles: [],
  isLoading: false,
  error: '',
  viewMode: ViewModeArticle.List,
}

export const articlesPageSlice = createSlice({
  name: 'articlePage',
  initialState,
  reducers: {
    setViewMode: (state, action: PayloadAction<ViewModeArticle>) => {
      state.viewMode = action.payload
    },
  },
})

export const { actions: articlesPageActions, reducer: articlesPageReducer } = articlesPageSlice
