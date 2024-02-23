import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Profile } from 'entities/Profile'

import { EditableProfileSchema } from '../types/editableProfile'
import { editProfileCard } from '../services/editProfileCard/editProfileCard'

const initialState: EditableProfileSchema = {
  profileForm: null,
  isLoading: false,
  isEditable: false,
  errors: undefined,
}

export const editableProfileSlice = createSlice({
  name: 'editableProfile',
  initialState,
  reducers: {
    setProfileForm: (state, action: PayloadAction<Profile>) => {
      state.profileForm = action.payload
    },
    updateProfileForm: (state, action: PayloadAction<Profile>) => {
      state.profileForm = {
        ...state.profileForm,
        ...action.payload,
      }
    },
    setIsEditable: (state, action: PayloadAction<boolean>) => {
      state.isEditable = action.payload
    },
    cancelEditable: (state, action: PayloadAction<Profile | null>) => {
      state.profileForm = action.payload
      state.isEditable = false
      state.errors = undefined
    },
  },
  extraReducers: (builder) => {
    builder.addCase(editProfileCard.pending, (state) => {
      state.isLoading = true
      state.errors = undefined
    })
    builder.addCase(editProfileCard.fulfilled, (state, action) => {
      state.profileForm = action.payload
      state.isLoading = false
    })
    builder.addCase(editProfileCard.rejected, (state, action) => {
      state.isLoading = false
      state.errors = action.payload
    })
  },
})

export const { actions: editableProfileActions, reducer: editableProfileReducer } = editableProfileSlice
