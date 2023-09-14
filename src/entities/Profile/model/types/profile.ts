import { Country } from 'constants/country'
import { Currency } from 'constants/currency'

export interface Profile {
  id: string
  firstname: string
  lastname: string
  age: number
  currency: Currency
  country: Country
  city: string
  username: string
  avatar: string
}

export interface ProfileSchema {
  profile: Profile | null
  isLoading: boolean
  isEditable: boolean
  error?: string
}
