import { Currency } from './model/types/currency'

export const currencyOptions = Object.values(Currency).map((currency) => ({ label: currency, value: currency }))
