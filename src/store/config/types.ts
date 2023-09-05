import { LoginSchema } from 'features/AuthByUserName'
import { UserSchema } from 'entities/User'
import {
  ReducersMapObject, AnyAction, CombinedState, Reducer, EnhancedStore,
} from '@reduxjs/toolkit'
import { CoreSchema } from '../../core'

export interface StoreSchema {
  core: CoreSchema
  user: UserSchema

  // async reducers
  login?: LoginSchema
}

export type StoreSchemaKey = keyof StoreSchema

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StoreSchema>
  reduce: (state: StoreSchema, action: AnyAction) => CombinedState<StoreSchema>
  add: (key: StoreSchemaKey, reducer: Reducer) => void
  remove: (key: StoreSchemaKey) => void
}

export interface ReduxStoreWithManager
  extends EnhancedStore<StoreSchema, AnyAction> {
  reducerManager: ReducerManager
}
