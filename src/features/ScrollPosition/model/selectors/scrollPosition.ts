import { StoreSchema } from 'app/store/config/types'

export const getScrollPosition = (state: StoreSchema, pathname: string) => state.scroll.scrollPosition[pathname] || 0
