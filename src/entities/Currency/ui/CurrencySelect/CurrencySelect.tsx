import React, { memo } from 'react'
import Select from 'components/Select'
import { Currency } from '../../model/types/currency'
import { currencyOptions } from '../../constants'

export interface CurrencySelectProps {
  value?: Currency
  onChange: (value: Currency) => void
  disabled?: boolean
  className?: string
}

export const CurrencySelect: React.FC<CurrencySelectProps> = memo(({
  value, onChange, disabled, className,
}) => (
  <Select
    options={currencyOptions}
    value={value}
    onChange={onChange}
    disabled={disabled}
    className={className}
    label='Валюта'
  />
))
