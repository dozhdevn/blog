import { StoreSchema } from 'store/config/types'

export const getLoginPassword = (state: StoreSchema) => state?.login?.password || ''
