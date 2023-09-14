/* eslint-disable react/jsx-no-useless-fragment */
import { Reducer } from '@reduxjs/toolkit'
import { useAppDispatch } from 'hooks/useAppDispatch'
import React, { useLayoutEffect } from 'react'
import { useStore } from 'react-redux'
import { ReduxStoreWithManager, StoreSchemaKey } from 'store/config/types'

export type ReducersList = {
  [key in StoreSchemaKey]?: Reducer
}

export interface DynamicModuleLoaderProps {
  reducers: ReducersList
  removeAfterUnmount?: boolean

}

export const DynamicModuleLoader: React.FC<DynamicModuleLoaderProps> = ({
  reducers, removeAfterUnmount = true, children,
}) => {
  const store = useStore() as ReduxStoreWithManager
  const dispatch = useAppDispatch()

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

  return (
    <>
      {children}
    </>
  )
}
