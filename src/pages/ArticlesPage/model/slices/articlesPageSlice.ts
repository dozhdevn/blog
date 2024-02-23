import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { getLocalStorage } from 'shared/lib/utils/getLocalStorage'
import { ARTICLES_VIEW_STORAGE_KEY } from 'shared/constants/localstorage'
import { getQuantityArticles } from 'entities/Article/lib/getQuantityArticles'
import { SortOrder } from 'shared/types'
import { ViewModeArticle, ArticleSortField, ArticleType } from 'entities/Article'

import { ArticlesPageSchema } from '../types/articlesPageSchema'
import { fetchArticleList } from '../services/fetchArticleList'

const initialState: ArticlesPageSchema = {
  articles: [],
  isLoading: false,
  error: '',
  page: 1,
  limit: 3,
  hasMore: true,
  _inited: false,
  viewMode: ViewModeArticle.List,
  sort: ArticleSortField.CREATED,
  order: 'asc',
  search: '',
  type: ArticleType.ALL,
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

    setSort: (state, action: PayloadAction<ArticleSortField>) => {
      state.page = 1
      state.sort = action.payload
    },

    setOrder: (state, action: PayloadAction<SortOrder>) => {
      state.page = 1
      state.order = action.payload
    },

    setSearch: (state, action: PayloadAction<string>) => {
      state.page = 1
      state.search = action.payload
    },

    setType: (state, action: PayloadAction<ArticleType>) => {
      state.page = 1
      state.type = action.payload
    },

    initState: (state) => {
      const view = getLocalStorage(ARTICLES_VIEW_STORAGE_KEY) as ViewModeArticle
      state.viewMode = view
      state.limit = getQuantityArticles(view)
      state._inited = true
    },

    resetState: (state) => {
      state.page = 1
      state.articles = []
      state.hasMore = true
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchArticleList.pending, (state, action) => {
      if (action.meta.arg.replace) {
        state.articles = []
      }
      state.isLoading = true
      state.error = ''
    })
    builder.addCase(fetchArticleList.fulfilled, (state, action) => {
      state.isLoading = false

      if (action.meta.arg.replace) {
        state.articles = action.payload
      } else {
        state.articles = [...state.articles, ...action.payload]
      }

      state.hasMore = action.payload.length >= state.limit
    })
    builder.addCase(fetchArticleList.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })
  },
})

export const { actions: articlesPageActions, reducer: articlesPageReducer } = articlesPageSlice
