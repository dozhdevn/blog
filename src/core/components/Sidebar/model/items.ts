import { RoutePath } from 'routes/model/routePaths'
import HomeIcon from 'assets/icons/svg/home.svg'
import AboutIcon from 'assets/icons/svg/about.svg'
import ProfileIcon from 'assets/icons/svg/profile.svg'
import ArticlesIcon from 'assets/icons/svg/articles.svg'

export interface SideBarLinkType {
  to: RoutePath,
  title: string,
  icon: React.VFC<React.SVGProps<SVGSVGElement>>
  visibleOnlyAuth?: boolean
}

export const sidebarLinksList: SideBarLinkType[] = [
  {
    to: RoutePath.MAIN,
    title: 'Главная',
    icon: HomeIcon,
  },
  {
    to: RoutePath.ABOUT,
    title: 'О сайте',
    icon: AboutIcon,
  },
  {
    to: RoutePath.PROFILE,
    title: 'Профиль',
    icon: ProfileIcon,
    visibleOnlyAuth: true,
  },
  {
    to: RoutePath.ARTICLES,
    title: 'Статьи',
    icon: ArticlesIcon,
    visibleOnlyAuth: true,
  },
]
