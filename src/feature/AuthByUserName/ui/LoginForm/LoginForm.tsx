import React, { useCallback, useState } from 'react'
import cn from 'classnames'

import { Button } from 'components/Button'
import { Input } from 'components/Input'

import { useTranslation } from 'react-i18next'
import styles from './LoginForm.module.scss'

export interface LoginFormProps {
  className?: string
}

export const LoginForm: React.FC<LoginFormProps> = ({ className }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const { t } = useTranslation()

  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault()
  }

  const onChangeUsername = useCallback((username: string) => {
    setUsername(username)
  }, [])

  const onChangePassword = useCallback((value: string) => {
    setPassword(value)
  }, [])

  return (
    <form onSubmit={onSubmitHandler} className={cn(styles.loginForm, className)}>
      <Input
        placeholder={t('Введите логин')}
        onChange={onChangeUsername}
        value={username}
        className={styles.loginForm__input}
      />
      <Input
        placeholder={t('Введите пароль')}
        onChange={onChangePassword}
        value={password}
        type='password'
        className={styles.loginForm__input}
      />
      <Button>{t('Войти')}</Button>
    </form>
  )
}
