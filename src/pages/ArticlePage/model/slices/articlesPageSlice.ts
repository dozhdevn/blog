import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ViewModeArticle } from 'entities/Article/model/types/article'
import { getLocalStorage } from 'shared/lib/utils/getLocalStorage'
import { ARTICLES_VIEW_STORAGE_KEY } from 'shared/constants/localstorage'
import { getQuantityArticles } from 'entities/Article/lib/getQuantityArticles'
import { ArticlesPageSchema } from '../types/articlesPageSchema'
import { fetchArticleList } from '../services/fetchArticleList'

const initialState: ArticlesPageSchema = {
  articles: [],
  isLoading: false,
  error: '',
  viewMode: ViewModeArticle.List,
  page: 1,
  limit: 3,
  hasMore: true,
}

export const articlesPageSlice = createSlice({
  name: 'articlePage',
  initialState,
  reducers: {
    setViewMode: (state, action: PayloadAction<ViewModeArticle>) => {
      state.viewMode = action.payload
      state.limit = getQuantityArticles(action.payload)
      localStorage.setItem(ARTICLES_VIEW_STORAGE_KEY, action.payload)
    },

    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload
    },

    initState: (state) => {
      const view = getLocalStorage(ARTICLES_VIEW_STORAGE_KEY) as ViewModeArticle
      state.viewMode = view
      state.limit = getQuantityArticles(view)
    },

    resetState: (state) => {
      state.page = 1
      state.articles = []
      state.hasMore = true
    },

  },
  extraReducers: (builder) => {
    builder.addCase(fetchArticleList.pending, (state) => {
      state.isLoading = true
      state.error = ''
    })
    builder.addCase(fetchArticleList.fulfilled, (state, action) => {
      state.isLoading = false
      state.articles = [...state.articles, ...action.payload]
      state.hasMore = action.payload.length > 0
    })
    builder.addCase(fetchArticleList.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })
  },
})

export const { actions: articlesPageActions, reducer: articlesPageReducer } = articlesPageSlice
