import {
  CombinedState, Reducer, ReducersMapObject, configureStore,
} from '@reduxjs/toolkit'
import { coreReducer } from 'app/core'
import { userReducer } from 'entities/User'
import { $axios } from 'shared/api/api'
import { scrollReducer } from 'features/ScrollPosition'
import { rtkApi } from 'shared/api/rtkApi'
import { StoreSchema, ThunkExtraArg } from './config/types'
import { createReducerManager } from './config/reducerManager'

export const createReduxStore = (initialState?: StoreSchema) => {
  const rootReducers: ReducersMapObject<StoreSchema> = {
    core: coreReducer,
    user: userReducer,
    scroll: scrollReducer,
    [rtkApi.reducerPath]: rtkApi.reducer,
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
      }).concat(rtkApi.middleware),
  })
  // @ts-ignore
  store.reducerManager = reducerManager

  return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
