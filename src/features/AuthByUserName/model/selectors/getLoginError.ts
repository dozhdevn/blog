import { StoreSchema } from 'store/config/types'

export const getLoginError = (state: StoreSchema) => state?.login?.error || ''
