import { Profile } from 'entities/Profile'

import { ProfileErrors } from '../../types/editableProfile'
import { ProfileSchemaValidationKeys, ValidateProfileError, usernameRegExp } from '../../consts/consts'

export const validateProfile = (profile?: Profile | null) => {
  const errors: ProfileErrors = {}

  if (!profile) {
    errors[ProfileSchemaValidationKeys.response] = ValidateProfileError.RESPONSE_ERROR
    return errors
  }

  if (!profile.firstname) {
    errors[ProfileSchemaValidationKeys.firstname] = ValidateProfileError.REQUIRED_FIRSTNAME
  }

  if (!profile.lastname) {
    errors[ProfileSchemaValidationKeys.lastname] = ValidateProfileError.REQUIRED_LASTNAME
  }

  if (!profile.username) {
    errors[ProfileSchemaValidationKeys.username] = ValidateProfileError.REQUIRED_USERNAME
  }

  if (profile.username && !usernameRegExp.test(profile.username)) {
    errors[ProfileSchemaValidationKeys.username] = ValidateProfileError.INCORRECT_USERNAME
  }

  return errors
}
