import { createSelector } from '@reduxjs/toolkit'
import { getAuthData } from './getAuthData'

export const getIsAuth = createSelector(getAuthData, (authData) => !!authData)
