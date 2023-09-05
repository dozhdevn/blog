import { Reducer } from '@reduxjs/toolkit'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { useEffect } from 'react'
import { useStore } from 'react-redux'
import { ReduxStoreWithManager, StoreSchemaKey } from 'store/config/types'

export type ReducersList = {
  [key in StoreSchemaKey]?: Reducer
}

interface WithAsyncReducersConfig {
  reducers: ReducersList
  removeAfterUnmount?: boolean
}

export const withAsyncReducers = <Props,> (Component: React.FC<Props>,
  config: WithAsyncReducersConfig) => (props: Props) => {
    const store = useStore() as ReduxStoreWithManager
    const dispatch = useAppDispatch()

    const { reducers, removeAfterUnmount = true } = config

    useEffect(() => {
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
