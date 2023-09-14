import { Profile } from 'entities/Profile'

export interface EditableProfileSchema {
  profileForm: Profile | null
  isLoading: boolean
  isEditable: boolean
  error?: string
}
