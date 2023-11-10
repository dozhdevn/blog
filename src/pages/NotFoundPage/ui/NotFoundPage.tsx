import { AppLink } from 'shared/ui/AppLink'
import React from 'react'
import { useTranslation } from 'react-i18next'

const NotFoundPage: React.FC = () => {
  const { t } = useTranslation('notFound')

  return (
    <div>
      <h1>{t('Данной страницы не существует')}</h1>
      <AppLink to='/'>{t('Перейти на главную')}</AppLink>
    </div>
  )
}

export default NotFoundPage
