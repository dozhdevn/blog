import { StoreSchema } from 'store/config/types'

export const getProfileForm = (state: StoreSchema) => state.editProfile?.profileForm || null
