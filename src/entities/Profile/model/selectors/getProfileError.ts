import { StoreSchema } from 'store/config/types'

export const getProfileError = (state: StoreSchema) => state.profile?.error
