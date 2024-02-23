import { createContext } from 'react'

import { SwiperType } from '../../types/swiper'

export interface SwiperContextPayload {
  Swiper?: SwiperType
  isLoaded?: boolean
}

const SwiperContext = createContext<SwiperContextPayload>({})

export default SwiperContext
