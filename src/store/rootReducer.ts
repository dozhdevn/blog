import { combineReducers } from '@reduxjs/toolkit'

import { coreReducer } from '../core'
import { StoreSchema } from './types'

export const rootReducer = combineReducers<StoreSchema>({
  core: coreReducer,
})
