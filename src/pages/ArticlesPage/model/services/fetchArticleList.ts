import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/store/config/types'
import { Article, ArticleType } from 'entities/Article/model/types/article'
import {
  getLimitArticleList,
  getSortArticleList,
  getOrderArticleList,
  getPageArticleList,
  getSearchArticleList,
  getTypeArticleList,
} from '../selectors/articlePageSelectors'

interface FetchArticleListProps {
  replace?: boolean
}

export const fetchArticleList = createAsyncThunk<Article[], FetchArticleListProps, ThunkConfig<string>>(
  'articlePage/fetchArticlesList',
  async (_, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi
    const limit = getLimitArticleList(getState())
    const page = getPageArticleList(getState())
    const sort = getSortArticleList(getState())
    const order = getOrderArticleList(getState())
    const search = getSearchArticleList(getState())
    const type = getTypeArticleList(getState())

    try {
      const response = await extra.api.get<Article[]>('/articles', {
        params: {
          _expand: 'user',
          _sort: sort,
          _order: order,
          _page: page,
          _limit: limit,
          q: search,
          type: type === ArticleType.ALL ? undefined : type,
        },
      })

      return response.data
    } catch (error) {
      return rejectWithValue('error')
    }
  },
)
