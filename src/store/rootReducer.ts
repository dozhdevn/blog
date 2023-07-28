import { combineReducers } from '@reduxjs/toolkit'

import { coreReducer } from '../core'

export const rootReducer = combineReducers({
  core: coreReducer,
})
