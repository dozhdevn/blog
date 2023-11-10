import { Reducer } from '@reduxjs/toolkit'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useLayoutEffect } from 'react'
import { useStore } from 'react-redux'
import { ReduxStoreWithManager, StoreSchemaKey } from 'app/store/config/types'

export type ReducersList = {
  [key in StoreSchemaKey]?: Reducer
}

interface WithAsyncReducersConfig {
  reducers: ReducersList
  removeAfterUnmount?: boolean
}

// eslint-disable-next-line max-len
export const withAsyncReducers = <Props extends Record<string, unknown>>(Component: React.FC<Props>, config: WithAsyncReducersConfig) =>
  (props: Props) => {
    const store = useStore() as ReduxStoreWithManager
    const dispatch = useAppDispatch()
    const { reducers, removeAfterUnmount = true } = config

    useLayoutEffect(() => {
      Object.entries(reducers).forEach(([key, reducer]) => {
        store.reducerManager.add(key as StoreSchemaKey, reducer)
        dispatch({ type: `@INIT ${key} reducer` })
      })
      return () => {
        if (removeAfterUnmount) {
          Object.keys(reducers).forEach((key) => {
            store.reducerManager.remove(key as StoreSchemaKey)
            dispatch({ type: `@DESTROY ${key} reducer` })
          })
        }
      }
    }, [])

    return <Component {...props} />
  }
