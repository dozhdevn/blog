import { StoreSchema } from 'app/store/config/types'

export const getLoginPassword = (state: StoreSchema) => state?.login?.password || ''
