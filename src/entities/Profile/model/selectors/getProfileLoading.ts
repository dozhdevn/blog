import { StoreSchema } from 'store/config/types'

export const getProfileLoading = (state: StoreSchema) => state.profile?.isLoading
