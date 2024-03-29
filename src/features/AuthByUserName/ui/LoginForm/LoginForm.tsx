import React, { memo, useCallback, useEffect } from 'react'
import cn from 'classnames'
import { Button } from 'shared/ui/Button'
import { Input } from 'shared/ui/Input'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { getAuthData } from 'entities/User'
import { Typography } from 'shared/ui/Typography'
import { ReducersList } from 'widgets/layouts/DynamicModuleLoader'
import { withAsyncReducers } from 'shared/lib/hocs/withAsyncReducers'
import { Flex } from 'shared/ui/Flex'

import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { loginActions, loginReducer } from '../../model/slice/loginSlice'
import { getLoginUsername } from '../../model/selectors/getLoginUsername'
import { getLoginPassword } from '../../model/selectors/getLoginPasswod'
import { getLoginLoading } from '../../model/selectors/getLoginLoading'
import { getLoginError } from '../../model/selectors/getLoginError'

import styles from './LoginForm.module.scss'

const initialReducers: ReducersList = {
  login: loginReducer,
}

export interface LoginFormProps {
  onClose?: () => void
  className?: string
}

const LoginForm: React.FC<LoginFormProps> = memo(({ onClose, className }) => {
  const dispatch = useAppDispatch()

  const authData = useSelector(getAuthData)

  const username = useSelector(getLoginUsername)
  const password = useSelector(getLoginPassword)
  const isLoading = useSelector(getLoginLoading)
  const error = useSelector(getLoginError)

  const { t } = useTranslation()

  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault()
    dispatch(loginByUsername({ username, password }))
  }

  const onChangeUsername = useCallback(
    (username: string) => {
      dispatch(loginActions.setUsername(username))
    },
    [dispatch],
  )

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value))
    },
    [dispatch],
  )

  useEffect(
    () => () => {
      dispatch(loginActions.resetState())
    },
    [dispatch],
  )

  useEffect(() => {
    if (authData) {
      onClose?.()
    }
  }, [authData, onClose])

  return (
    <Flex as='form' direction='column' onSubmit={onSubmitHandler} className={cn(styles.loginForm, className)}>
      <Typography variant='title' className={styles.loginForm__title}>
        Войти
      </Typography>
      <Input
        placeholder={t('Введите логин')}
        onChange={onChangeUsername}
        value={username}
        className={styles.loginForm__input}
        error={!!error}
      />
      <Input
        placeholder={t('Введите пароль')}
        onChange={onChangePassword}
        value={password}
        type='password'
        className={styles.loginForm__input}
        error={!!error}
        helperText={error}
      />
      <Button disabled={isLoading}>{t('Войти')}</Button>
    </Flex>
  )
})

const config = {
  reducers: initialReducers,
}

export default withAsyncReducers(LoginForm, config)
