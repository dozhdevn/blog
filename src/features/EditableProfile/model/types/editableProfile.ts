import { Profile } from 'entities/Profile'
import { ProfileSchemaValidationKeys, ValidateProfileError } from '../consts/consts'

export type ProfileErrors = { [key in ProfileSchemaValidationKeys]?: ValidateProfileError}

export interface EditableProfileSchema {
  profileForm: Profile | null
  isLoading: boolean
  isEditable: boolean
  errors?: ProfileErrors
}
