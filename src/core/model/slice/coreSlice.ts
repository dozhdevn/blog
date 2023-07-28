import { createSlice } from '@reduxjs/toolkit'
import { CoreReducerState, Theme } from '../types/types'
import { getLocalStorage } from '../../../utils/getLocalStorage'

const initialState: CoreReducerState = {
  theme: (getLocalStorage('theme') as Theme) || Theme.LIGHT,
}

const coreSlice = createSlice({
  name: 'core',
  initialState,
  reducers: {
    toggleTheme: state => {
      state.theme = state.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
    },
  },
})

export const { actions: coreActions, reducer: coreReducer } = coreSlice
