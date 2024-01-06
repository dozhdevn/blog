import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ScrollPositionPayload, ScrollPositionSchema } from '../types/scrollPositionSchema'

const initialState: ScrollPositionSchema = {
  scrollPosition: {},
}

const scrollPositionSlice = createSlice({
  name: 'scrollPositionSlice',
  initialState,
  reducers: {
    setScrollPosition: (state, action: PayloadAction<ScrollPositionPayload>) => {
      state.scrollPosition[action.payload.pathname] = action.payload.position
    },
  },
})

export const { actions: scrollAction, reducer: scrollReducer } = scrollPositionSlice
