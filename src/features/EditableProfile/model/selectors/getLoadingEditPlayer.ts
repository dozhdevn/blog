import { StoreSchema } from 'app/store/config/types'

export const getLoadingEditPlayer = (state: StoreSchema) => state.editProfile?.isLoading || false
