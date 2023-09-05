import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { User, UserSchema } from '../types/user'
import { UserService } from '../services/userService'

const initialState: UserSchema = {
  authData: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload
    },
    initialAuthData: (state) => {
      state.authData = UserService.getUserLocalStorage()
    },
    logOut: (state) => {
      state.authData = null
      UserService.removeUserLocalStorage()
    },
  },
})

export const { actions: userActions, reducer: userReducer } = userSlice
