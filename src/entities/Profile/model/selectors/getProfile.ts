import { StoreSchema } from 'store/config/types'

export const getProfile = (state: StoreSchema) => state.profile?.profile || null
