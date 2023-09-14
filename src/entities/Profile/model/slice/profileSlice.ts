import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ProfileSchema } from '../types/profile'
import { fetchProfile } from '../services/fetchProfile/fetchProfile'

const initialState: ProfileSchema = {
  profile: null,
  isLoading: false,
  error: '',
  isEditable: false,
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setIsEditable: (state, action: PayloadAction<boolean>) => {
      state.isEditable = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProfile.pending, (state) => {
      state.isLoading = true
      state.error = ''
    })
    builder.addCase(fetchProfile.fulfilled, (state, action) => {
      state.isLoading = false
      state.profile = action.payload
    })
    builder.addCase(fetchProfile.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })
  },
})

export const { actions: profileActions, reducer: profileReducer } = profileSlice
