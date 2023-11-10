import { StoreSchema } from 'app/store/config/types'

export const getLoginUsername = (state: StoreSchema) => state?.login?.username || ''
