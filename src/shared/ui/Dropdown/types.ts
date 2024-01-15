import { Placements } from './constants'

type Placement = (typeof Placements)[number]

export interface DropdownItem {
  label: React.ReactNode
  icon?: React.VFC<React.SVGProps<SVGSVGElement>>
}

export interface DropdownProps {
  items: DropdownItem[]
  placement?: Placement
  className?: string
}
