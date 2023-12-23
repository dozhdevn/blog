import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ViewModeArticle } from 'entities/Article/model/types/article'
import { getLocalStorage } from 'shared/lib/utils/getLocalStorage'
import { ARTICLES_VIEW_STORAGE_KEY } from 'shared/constants/localstorage'
import { ArticlesPageSchema } from '../types/articlesPageSchema'
import { fetchArticleList } from '../services/fetchArticleList'

const initialState: ArticlesPageSchema = {
  articles: [],
  isLoading: false,
  error: '',
  viewMode: (getLocalStorage(ARTICLES_VIEW_STORAGE_KEY) as ViewModeArticle) || ViewModeArticle.List,
}

export const articlesPageSlice = createSlice({
  name: 'articlePage',
  initialState,
  reducers: {
    setViewMode: (state, action: PayloadAction<ViewModeArticle>) => {
      state.viewMode = action.payload
      localStorage.setItem(ARTICLES_VIEW_STORAGE_KEY, action.payload)
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchArticleList.pending, (state) => {
      state.isLoading = true
      state.error = ''
    })
    builder.addCase(fetchArticleList.fulfilled, (state, action) => {
      state.isLoading = false
      state.articles = action.payload
    })
    builder.addCase(fetchArticleList.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })
  },
})

export const { actions: articlesPageActions, reducer: articlesPageReducer } = articlesPageSlice
