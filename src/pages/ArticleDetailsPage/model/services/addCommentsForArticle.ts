import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/store/config/types'
import { getArticle } from 'entities/Article/model/selectors/articleDetails'
import { getAuthData } from 'entities/User'
import { fetchCommentsByArticleId } from 'features/ArticleCommentList'

export const addCommentForArticle = createAsyncThunk<Comment, string, ThunkConfig<string>>(
  'articleDetailsPage/addCommentForArticle',
  async (text, thunkAPi) => {
    const {
      dispatch, extra, rejectWithValue, getState,
    } = thunkAPi

    const userData = getAuthData(getState())
    const article = getArticle(getState())

    if (!userData || !article || !text) {
      return rejectWithValue('no data')
    }

    const params = {
      articleId: article?.id,
      userId: userData?.id,
      text,
    }

    try {
      const response = await extra.api.post<Comment>('/comments', params)

      dispatch(fetchCommentsByArticleId(article.id))

      return response.data
    } catch (error) {
      return rejectWithValue('error')
    }
  },
)
