import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { User, UserSchema } from '../types/user'
import { UserService } from '../services/userService'

const initialState: UserSchema = {
  authData: null,
  _inited: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload
    },
    initialAuthData: (state) => {
      const user = UserService.getUserLocalStorage()
      if (user) {
        state.authData = JSON.parse(user)
      }
      state._inited = true
    },
    logOut: (state) => {
      state.authData = null
      UserService.removeUserLocalStorage()
      UserService.removeAccessToken()
    },
  },
})

export const { actions: userActions, reducer: userReducer } = userSlice
