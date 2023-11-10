import { StoreSchema } from 'app/store/config/types'

export const getAuthData = (state: StoreSchema) => state.user.authData
