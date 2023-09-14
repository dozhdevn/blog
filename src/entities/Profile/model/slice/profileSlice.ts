import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Profile, ProfileSchema } from '../types/profile'
import { fetchProfile } from '../services/fetchProfile/fetchProfile'

const initialState: ProfileSchema = {
  profile: null,
  isLoading: false,
  error: '',
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfile: (state, action:PayloadAction<Profile>) => {
      state.profile = action.payload
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
