import axios from 'axios'
import { UserService } from 'entities/User'

export const $axios = axios.create({
  baseURL: __API__,
})

$axios.interceptors.request.use((config: any) => {
  config.headers.Authorization = UserService.getAccessToken()

  return config
})
