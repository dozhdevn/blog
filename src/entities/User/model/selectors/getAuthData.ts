import { StoreSchema } from 'store/config/types'

export const getAuthData = (state: StoreSchema) => state.user.authData
