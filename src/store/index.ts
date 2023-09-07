import {
  CombinedState, Reducer, ReducersMapObject, configureStore,
} from '@reduxjs/toolkit'
import { coreReducer } from 'core'
import { userReducer } from 'entities/User'
import { $axios } from 'core/api/api'
import { StoreSchema, ThunkExtraArg } from './config/types'
import { createReducerManager } from './config/reducerManager'

export const createReduxStore = (initialState?: StoreSchema) => {
  const rootReducers: ReducersMapObject<StoreSchema> = {
    core: coreReducer,
    user: userReducer,
  }

  const reducerManager = createReducerManager(rootReducers)

  const extraArgument: ThunkExtraArg = {
    api: $axios,
  }

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StoreSchema>>,
    devTools: __IS__DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument,
        },
      }),
  })
  // @ts-ignore
  store.reducerManager = reducerManager

  return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
