import { createSlice } from '@reduxjs/toolkit'
import { getLocalStorage } from 'utils/getLocalStorage'
import { CoreSchema, Theme } from '../types/types'

const initialState: CoreSchema = {
  theme: (getLocalStorage('theme') as Theme) || Theme.LIGHT,
}

const coreSlice = createSlice({
  name: 'core',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
    },
  },
})

export const { actions: coreActions, reducer: coreReducer } = coreSlice
