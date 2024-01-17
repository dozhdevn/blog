export const usernameRegExp = /^[a-zA-Z0-9]+$/

export enum ProfileSchemaValidationKeys {
  firstname = 'firstname',
  lastname = 'lastname',
  username = 'username',
  age = 'age',
  response = 'response',
}

export enum ValidateProfileError {
  REQUIRED_FIRSTNAME = 'Введите имя пользователя',
  REQUIRED_LASTNAME = 'Введите фамилию',
  REQUIRED_USERNAME = 'Введите логин',
  INCORRECT_USERNAME = 'Логин должен содержать только латинские буквы и цифры',
  REQUIRED_AGE = 'Введите возраст',
  RESPONSE_ERROR = 'Ошибка запроса',
}
