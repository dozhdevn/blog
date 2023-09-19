import { Profile } from 'entities/Profile'
import { ProfileErrors } from '../../types/editableProfile'

const usernameRegExp = /^[a-zA-Z0-9]+$/

export enum ProfileSchemaValidationKeys {
  firstname = 'firstname',
  lastname = 'lastname',
  username = 'username',
  age = 'age',
  response = 'response'
}

export enum ValidateProfileError {
  REQUIRED_FIRSTNAME = 'Введите имя пользователя',
  REQUIRED_LASTNAME = 'Введите фамилию',
  REQUIRED_USERNAME = 'Введите логин',
  INCORRECT_USERNAME = 'Логин должен содержать только латинские буквы и цифры',
  REQUIRED_AGE = 'Введите возраст',
  RESPONSE_ERROR = 'Ошибка запроса'
}

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
