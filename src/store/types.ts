import { LoginSchema } from 'features/AuthByUserName'
import { UserSchema } from 'entities/User'
import { CoreSchema } from '../core'

export interface StoreSchema {
  core: CoreSchema
  login: LoginSchema
  user: UserSchema
}
