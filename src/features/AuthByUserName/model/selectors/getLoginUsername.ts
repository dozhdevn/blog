import { StoreSchema } from 'store/config/types'

export const getLoginUsername = (state: StoreSchema) => state?.login?.username || ''
