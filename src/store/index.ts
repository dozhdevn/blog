import { ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { coreReducer } from 'core'
import { userReducer } from 'entities/User'
import { StoreSchema } from './config/types'
import { createReducerManager } from './config/reducerManager'

export const createReduxStore = (initialState?: StoreSchema) => {
  const rootReducers: ReducersMapObject<StoreSchema> = {
    core: coreReducer,
    user: userReducer,
  }

  const reducerManager = createReducerManager(rootReducers)

  const store = configureStore<StoreSchema>({
    reducer: reducerManager.reduce,
    devTools: __IS__DEV__,
    preloadedState: initialState,
  })
  // @ts-ignore
  store.reducerManager = reducerManager

  return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
