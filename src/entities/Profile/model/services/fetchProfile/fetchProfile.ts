import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'store/config/types'
import { editableProfileActions } from 'features/EditableProfile'
import { Profile } from '../../types/profile'

export const fetchProfile = createAsyncThunk<Profile, string, ThunkConfig>(
  'profile/fetchProfile',
  async (profileId, thunkAPI) => {
    const { extra, rejectWithValue, dispatch } = thunkAPI
    try {
      const response = await extra.api.get(`/profile/${profileId}`)
      if (!response.data) {
        throw new Error()
      }
      dispatch(editableProfileActions.setProfileForm(response.data))
      return response.data
    } catch (error) {
      return rejectWithValue('error')
    }
  },
)
