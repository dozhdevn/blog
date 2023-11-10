import { StoreSchema } from 'app/store/config/types'

export const getLoginError = (state: StoreSchema) => state?.login?.error || ''
