export interface SideBarLinkType {
  to: string
  title: string
  icon: React.VFC<React.SVGProps<SVGSVGElement>>
  visibleOnlyAuth?: boolean
}
