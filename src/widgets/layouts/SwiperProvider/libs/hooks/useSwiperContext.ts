import { useContext } from 'react'

import { SwiperContext } from '../SwiperContext'
import { SwiperContextPayload } from '../SwiperContext/SwiperContext'

export const useSwiperContext = () => useContext(SwiperContext) as Required<SwiperContextPayload>
