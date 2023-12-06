import { LoginSchema } from 'features/AuthByUserName'
import { UserSchema } from 'entities/User'
import {
  ReducersMapObject, AnyAction, CombinedState, Reducer, EnhancedStore,
} from '@reduxjs/toolkit'
import { AxiosInstance } from 'axios'
import { AppDispatch } from 'app/store'
import { ProfileSchema } from 'entities/Profile'
import { EditableProfileSchema } from 'features/EditableProfile'
import { ArticleDetailsSchema } from 'entities/Article/model/types/articleDetailsSchema'
import { ArticleCommentListSchema } from 'features/ArticleCommentList'
import { ArticlesPageSchema } from 'pages/ArticlePage'
import { CoreSchema } from '../../core'

export interface StoreSchema {
  core: CoreSchema
  user: UserSchema

  // async reducers
  profile?: ProfileSchema
  editProfile?: EditableProfileSchema
  login?: LoginSchema
  article?: ArticleDetailsSchema
  articleComments?: ArticleCommentListSchema
  articlePage?: ArticlesPageSchema
}

export type StoreSchemaKey = keyof StoreSchema

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StoreSchema>
  reduce: (state: StoreSchema, action: AnyAction) => CombinedState<StoreSchema>
  add: (key: StoreSchemaKey, reducer: Reducer) => void
  remove: (key: StoreSchemaKey) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<StoreSchema, AnyAction> {
  reducerManager: ReducerManager
}

export interface ThunkExtraArg {
  api: AxiosInstance
}

export interface ThunkConfig<T = string> {
  dispatch: AppDispatch
  rejectValue: T
  extra: ThunkExtraArg
  state: StoreSchema
}
