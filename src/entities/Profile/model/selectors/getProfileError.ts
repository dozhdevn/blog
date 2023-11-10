import { StoreSchema } from 'app/store/config/types'

export const getProfileError = (state: StoreSchema) => state.profile?.error
