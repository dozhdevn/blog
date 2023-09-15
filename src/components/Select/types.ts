export type SelectOption<T = string> = {
  value: T
  label: string
}

export interface SelectProps<T = string> {
  value?: SelectOption['value']
  options: SelectOption<T>[]
  placeholder?: string
  disabled?: boolean
  open?: boolean
  className?: string
  onChange: (value: T) => void
  onClose?: () => void
}
