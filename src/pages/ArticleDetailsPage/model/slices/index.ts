import { combineReducers } from '@reduxjs/toolkit'
import { articleDetailsCommentsReducer } from 'features/ArticleCommentList'

import { ArticleDetailsPageSchema } from '../types/ArticleDetailsPageSchems'

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
  articleDetailsCommentsReducer,
})
