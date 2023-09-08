import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'store/config/types'
import { Profile } from '../../types/profile'
import { profileActions } from '../../slice/profileSlice'

export const fetchProfile = createAsyncThunk<Profile, string, ThunkConfig>(
  'users/fetchByIdStatus',
  async (profileId, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI
    try {
      const response = await extra.api.get(`/profile/${profileId}`)

      return response.data
    } catch (error) {
      return rejectWithValue('error')
    }
  },
)
