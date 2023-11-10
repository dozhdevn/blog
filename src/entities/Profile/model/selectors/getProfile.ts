import { StoreSchema } from 'app/store/config/types'

export const getProfile = (state: StoreSchema) => state.profile?.profile || null
