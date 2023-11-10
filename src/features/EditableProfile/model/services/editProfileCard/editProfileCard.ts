import { createAsyncThunk } from '@reduxjs/toolkit'
import { Profile, profileActions } from 'entities/Profile'
import { ThunkConfig } from 'app/store/config/types'
import { isEmpti } from 'shared/lib/utils/isEmpty'
import { getProfileForm } from '../../selectors/getProfileForm'
import { editableProfileActions } from '../../slice/editableProfile'
import { ValidateProfileError, validateProfile } from '../validateProfile/validateProfile'
import { ProfileErrors } from '../../types/editableProfile'

export const editProfileCard = createAsyncThunk<Profile, void, ThunkConfig<ProfileErrors>>(
  'editProfile/profile',
  async (_, thunkAPI) => {
    const {
      extra, dispatch, rejectWithValue, getState,
    } = thunkAPI

    const profileForm = getProfileForm(getState())

    const errors = validateProfile(profileForm)

    if (!isEmpti(errors)) {
      return rejectWithValue(errors)
    }

    try {
      const response = await extra.api.put<Profile>(`/profile/${profileForm?.id}`, profileForm)

      if (!response.data) {
        throw new Error()
      }

      dispatch(profileActions.setProfile(response.data))
      dispatch(editableProfileActions.setIsEditable(false))

      return response.data
    } catch (error) {
      return rejectWithValue({ response: ValidateProfileError.RESPONSE_ERROR })
    }
  },
)
