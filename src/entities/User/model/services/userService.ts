import { USER_LOCALE_STORAGE_KEY } from 'constants/localstorage'
import Cookies from 'universal-cookie'
import { User } from '../types/user'

export class UserService {
  private static _cookies = new Cookies()

  static get cookies() {
    return this._cookies
  }

  public static setUserLocalStorage = (user: User) => {
    localStorage.setItem(USER_LOCALE_STORAGE_KEY, JSON.stringify(user))
  }

  public static getUserLocalStorage = () => JSON.parse(localStorage.getItem(USER_LOCALE_STORAGE_KEY) || '')

  public static removeUserLocalStorage = () => localStorage.removeItem(USER_LOCALE_STORAGE_KEY)

  public static setAccessToken = (accessToken: string) => {
    this.cookies.set('access_token', accessToken)
  }

  public static getAccessToken = () => this.cookies.get('access_token')
}
