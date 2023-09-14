import { createAsyncThunk } from '@reduxjs/toolkit'
import { Profile, profileActions } from 'entities/Profile'
import { ThunkConfig } from 'store/config/types'
import { getProfileForm } from '../../selectors/getProfileForm'
import { editableProfileActions } from '../../slice/editableProfile'

export const editProfileCard = createAsyncThunk<Profile, void, ThunkConfig>(
  'editProfile/profile',
  async (_, thunkAPI) => {
    const {
      extra,
      dispatch,
      rejectWithValue,
      getState,
    } = thunkAPI

    const profileForm = getProfileForm(getState())
    try {
      const response = await extra.api.put<Profile>(`/profile/${profileForm?.id}`, profileForm)

      if (!response.data) {
        throw new Error()
      }

      dispatch(profileActions.setProfile(response.data))
      dispatch(editableProfileActions.setIsEditable(false))

      return response.data
    } catch (error) {
      return rejectWithValue('error')
    }
  },
)
