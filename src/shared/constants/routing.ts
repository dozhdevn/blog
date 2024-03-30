export enum RoutePath {
  MAIN = '/',
  ABOUT = '/about',
  PROFILE = '/profile',
  ARTICLES = '/articles',
  ARTICLE_DEATAILS = '/articles/:id',
  ADMIN = '/admin',
  FORBIDDEN = '/forbidden',
  NOT_FOUND = '/*',
}

export const getRouteMain = () => RoutePath.MAIN
export const getRouteForbidden = () => RoutePath.FORBIDDEN
export const getRouteAdmin = () => RoutePath.ADMIN
export const getRouteProfile = (id?: string) => `${RoutePath.PROFILE}/${id}`
export const getRouteArctiles = (id: string) => `${RoutePath.ARTICLES}/${id}`
