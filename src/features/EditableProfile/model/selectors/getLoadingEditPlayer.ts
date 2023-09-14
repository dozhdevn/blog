import { StoreSchema } from 'store/config/types'

export const getLoadingEditPlayer = (state: StoreSchema) => state.editProfile?.isLoading || false
