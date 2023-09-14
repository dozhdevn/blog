import { StoreSchema } from 'store/config/types'

export const getIsEditableProfile = (state: StoreSchema) => state.profile?.isEditable || false
