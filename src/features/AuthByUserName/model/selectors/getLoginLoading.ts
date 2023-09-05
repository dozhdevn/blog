import { StoreSchema } from 'store/types'

export const getLoginLoading = (state: StoreSchema) => state.login.isLoading
