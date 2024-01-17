import { UserRole } from '../consts/consts'

export interface User {
  avatar: string
  id: string
  role?: UserRole[]
  username: string
}

export interface UserSchema {
  authData: User | null
  _inited: boolean
}
