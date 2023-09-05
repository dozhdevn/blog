import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { rootReducer } from './rootReducer'
import { StoreSchema } from './types'

export const store = configureStore<StoreSchema>({
  reducer: rootReducer,
  devTools: __IS__DEV__,
})

export type AppDispatch = typeof store.dispatch
