import React from 'react'
import { useTranslation } from 'react-i18next'

import TestSwiper from '../TestSwiper'

function AboutPage() {
  const { t } = useTranslation('about')

  return (
    <div>
      <TestSwiper />
    </div>
  )
}

export default AboutPage
