import React, { memo } from 'react'
import Select from 'shared/ui/Select'

import { countryOptions } from '../../constants'
import { Country } from '../../model/types/country'

export interface CountrySelectProps {
  value?: Country
  onChange: (value: Country) => void
  disabled?: boolean
  className?: string
}

export const CountrySelect: React.FC<CountrySelectProps> = memo(({
  value, onChange, disabled, className,
}) => (
  <Select
    label='Страна'
    options={countryOptions}
    value={value}
    onChange={onChange}
    disabled={disabled}
    className={className}
  />
))
