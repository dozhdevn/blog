import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { User, UserService, userActions } from 'entities/User'

interface LoginByUsernameProps {
  password: string
  username: string
}

const instance = axios.create({
  baseURL: 'http://localhost:8000',
})

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, { rejectValue: string} >(
  'auth/loginByUsername',
  async (authData, thunkApi) => {
    try {
      const response = await instance.post<User>('/login', authData)

      if (!response.data) {
        throw new Error()
      }
      UserService.setUserLocalStorage(response.data)
      thunkApi.dispatch(userActions.setAuthData(response.data))

      return response.data
    } catch (error) {
      return thunkApi.rejectWithValue('Вы ввели неверный логин или пароль')
    }
  },
)
