export interface User {
  avatar: string
  id: string
  role?: string
  username: string
}

export interface UserSchema {
  authData: User | null
  _inited: boolean
}
