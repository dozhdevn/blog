import { USER_LOCALE_STORAGE_KEY } from 'constants/localstorage'
import axios from 'axios'

export const $axios = axios.create({
  baseURL: __API__,
  headers: {
    authorization: localStorage.getItem(USER_LOCALE_STORAGE_KEY) || '',
  },
})
