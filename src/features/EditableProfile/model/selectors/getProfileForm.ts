import { StoreSchema } from 'app/store/config/types'

export const getProfileForm = (state: StoreSchema) => state.editProfile?.profileForm || null
