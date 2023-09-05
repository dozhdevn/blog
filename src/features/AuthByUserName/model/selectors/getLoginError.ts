import { StoreSchema } from 'store/types'

export const getLoginError = (state: StoreSchema) => state.login.error
