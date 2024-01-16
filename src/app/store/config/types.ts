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
import { ArticlesPageSchema } from 'pages/ArticlesPage'
import { ScrollPositionSchema } from 'features/ScrollPosition'
import { ArticleDetailsPageSchema } from 'pages/ArticleDetailsPage'
import { rtkApi } from 'shared/api/rtkApi'
import { CoreSchema } from '../../core'

export interface StoreSchema {
  core: CoreSchema
  user: UserSchema
  scroll: ScrollPositionSchema
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>

  // async reducers
  profile?: ProfileSchema
  editProfile?: EditableProfileSchema
  login?: LoginSchema
  article?: ArticleDetailsSchema
  articleDetailsPage?: ArticleDetailsPageSchema
  articlesPage?: ArticlesPageSchema
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
