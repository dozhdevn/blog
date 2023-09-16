import { Country } from './model/types/country'

export const countryOptions = Object.values(Country).map((country) => ({ label: country, value: country }))
