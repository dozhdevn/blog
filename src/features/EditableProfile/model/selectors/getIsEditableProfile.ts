import { StoreSchema } from 'app/store/config/types'

export const getIsEditableProfile = (state: StoreSchema) => state.editProfile?.isEditable || false
