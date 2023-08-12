import React from 'react'

import cn from 'classnames'

import { useTranslation } from 'react-i18next'
import { Languages } from 'i18n/types'
import { IconButton } from 'components/IconButton'
import styles from './LanguageSwitch.module.scss'

export interface LanguageSwitchProps {
  className?: string
}

export const LanguageSwitch: React.FC<LanguageSwitchProps> = ({
  className,
}) => {
  const { t, i18n } = useTranslation()

  const changeLanguageHandler = () => {
    i18n.changeLanguage(
      i18n.language === Languages.RU ? Languages.EN : Languages.RU,
    )
  }

  return (
    <IconButton
      onClick={changeLanguageHandler}
      className={cn(styles.langSwitcher, className)}
    >
      <p>{t('Язык')}</p>
    </IconButton>
  )
}
