import { StoreSchema } from 'app/store/config/types'

export const getProfileLoading = (state: StoreSchema) => state.profile?.isLoading
