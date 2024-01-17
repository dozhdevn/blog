/* eslint-disable react/jsx-no-useless-fragment */
import { Reducer } from '@reduxjs/toolkit'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import React, { useLayoutEffect } from 'react'
import { useStore } from 'react-redux'
import { ReduxStoreWithManager, StoreSchemaKey } from 'app/store/config/types'

export type ReducersList = {
  [key in StoreSchemaKey]?: Reducer
}

export interface DynamicModuleLoaderProps {
  reducers: ReducersList
  removeAfterUnmount?: boolean
  children?: React.ReactNode
}

export const DynamicModuleLoader = ({
  reducers,
  removeAfterUnmount = true,
  children,
}: DynamicModuleLoaderProps) => {
  const store = useStore() as ReduxStoreWithManager
  const dispatch = useAppDispatch()

  useLayoutEffect(() => {
    const mountedReducers = store.reducerManager.getReducerMap()

    Object.entries(reducers).forEach(([key, reducer]) => {
      const mounted = mountedReducers[key as StoreSchemaKey]

      if (!mounted) {
        store.reducerManager.add(key as StoreSchemaKey, reducer)
        dispatch({ type: `@INIT ${key} reducer` })
      }
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

  return <>{children}</>
}
