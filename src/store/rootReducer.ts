import { combineReducers } from '@reduxjs/toolkit'

import { loginReducer } from 'features/AuthByUserName'
import { userReducer } from 'entities/User'
import { coreReducer } from '../core'
import { StoreSchema } from './types'

export const rootReducer = combineReducers<StoreSchema>({
  core: coreReducer,
  login: loginReducer,
  user: userReducer,
})
