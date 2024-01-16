import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { UserService } from 'entities/User'

export const rtkApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: __API__,
    prepareHeaders: (headers: Headers) => {
      const token = UserService.getAccessToken()

      if (token) {
        headers.set('Authorization', token)
      }
      return headers
    },
  }),
  endpoints: () => ({}),
})
