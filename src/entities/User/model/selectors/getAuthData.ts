import { StoreSchema } from 'store/types'

export const getAuthData = (state: StoreSchema) => state.user.authData
