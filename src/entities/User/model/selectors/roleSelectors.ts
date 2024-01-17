import { createSelector } from '@reduxjs/toolkit'
import { StoreSchema } from 'app/store/config/types'
import { UserRole } from '../types/user'

export const getUserRoles = (state: StoreSchema) => state.user.authData?.role || []

export const isUserAdmin = createSelector(getUserRoles, (roles) => roles.includes(UserRole.ADMIN))

export const isUserManager = createSelector(getUserRoles, (roles) => roles.includes(UserRole.MANAGER))

export const isAccessByRole = (roles: UserRole[]) =>
  createSelector(getUserRoles, (userRoles) => {
    if (!roles || !roles?.length) {
      return true
    }

    return userRoles.some((role) => roles?.includes(role))
  })
