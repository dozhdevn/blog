import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'store/config/types'
import { Profile } from '../../types/profile'

export const fetchProfile = createAsyncThunk<Profile, string, ThunkConfig>(
  'profile/fetchProfile',
  async (profileId, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI
    try {
      const response = await extra.api.get(`/profile/${profileId}`)
      if (!response.data) {
        throw new Error()
      }
      return response.data
    } catch (error) {
      return rejectWithValue('error')
    }
  },
)
