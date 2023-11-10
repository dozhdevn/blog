import { StoreSchema } from 'app/store/config/types'

export const getEditProfileErrors = (state: StoreSchema) => state.editProfile?.errors
