export enum UserRole {
  ADMIN = 'ADMIN',
  USER = 'USER',
  MANAGER = 'MANAGER',
}

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
