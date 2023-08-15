import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './rootReducer'
import { StoreSchema } from './types'

export const store = configureStore<StoreSchema>({
  reducer: rootReducer,
  devTools: __IS__DEV__,
})
