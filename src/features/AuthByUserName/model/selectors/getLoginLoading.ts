import { StoreSchema } from 'store/config/types'

export const getLoginLoading = (state: StoreSchema) => state?.login?.isLoading || false
