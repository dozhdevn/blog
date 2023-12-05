import { RoutePath } from 'app/routes/model/routePaths'
import HomeIcon from 'shared/assets/icons/svg/home.svg'
import AboutIcon from 'shared/assets/icons/svg/about.svg'
import ProfileIcon from 'shared/assets/icons/svg/profile.svg'
import ArticlesIcon from 'shared/assets/icons/svg/articles.svg'

export interface SideBarLinkType {
  to: string
  title: string
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
    to: `${RoutePath.PROFILE}/:id`,
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
