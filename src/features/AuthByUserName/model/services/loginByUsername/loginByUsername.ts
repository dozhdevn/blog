import { createAsyncThunk } from '@reduxjs/toolkit'
import { User, UserService, userActions } from 'entities/User'
import { ThunkConfig } from 'app/store/config/types'

interface LoginByUsernameProps {
  password: string
  username: string
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig>(
  'auth/loginByUsername',
  async (authData, thunkAPI) => {
    const { dispatch, extra, rejectWithValue } = thunkAPI
    try {
      const response = await extra.api.post<User>('/login', authData)

      if (!response.data) {
        throw new Error()
      }
      UserService.setUserLocalStorage(response.data)
      UserService.setAccessToken(response.data.username)
      dispatch(userActions.setAuthData(response.data))

      return response.data
    } catch (error) {
      return rejectWithValue('Вы ввели неверный логин или пароль')
    }
  },
)
