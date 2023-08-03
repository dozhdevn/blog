import React from 'react'

import cn from 'classnames'

import styles from './LanguageSwitch.module.scss'
import { Button } from 'components/Button'
import { useTranslation } from 'react-i18next'
import { Languages } from 'i18n/types'

export interface LanguageSwitchProps {
  className?: string
}

export const LanguageSwitch: React.FC<LanguageSwitchProps> = ({
  className,
}) => {
  const { t, i18n } = useTranslation()

  const changeLanguageHandler = () => {
    i18n.changeLanguage(i18n.language === Languages.RU ? Languages.EN : Languages.RU)
  }

  return (
    <Button
      onClick={changeLanguageHandler}
      className={cn(styles.langSwitcher, className)}
    >
      {t('Язык')}
    </Button>
  )
}
