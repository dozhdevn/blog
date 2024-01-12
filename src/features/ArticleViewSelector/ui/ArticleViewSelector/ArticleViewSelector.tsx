import React from 'react'
import cn from 'classnames'

import { ViewModeArticle } from 'entities/Article/model/types/article'

import TyleIcon from 'shared/assets/icons/svg/tile.svg'
import ListIcon from 'shared/assets/icons/svg/list.svg'

import { Flex } from 'shared/ui/Flex'
import styles from './ArticleViewSelector.module.scss'

const articleViewModes = [
  {
    value: ViewModeArticle.List,
    icon: ListIcon,
  },
  {
    value: ViewModeArticle.Tile,
    icon: TyleIcon,
  },
]

interface Props {
  viewMode: ViewModeArticle
  onViewClick: (value: ViewModeArticle) => void
  className?: string
}

const ArticleViewSelector: React.FC<Props> = ({ viewMode, onViewClick, className }) => {
  const onChangeArticleViewHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    onViewClick(event.target.value as ViewModeArticle)
  }

  return (
    <Flex className={cn(styles.root, className)}>
      {articleViewModes.map(({ value, icon: Icon }) => {
        const checked = value === viewMode
        return (
          <Flex
            as='label'
            htmlFor={value}
            key={value}
            className={cn(styles.label, styles[`label-${value}`], checked && styles.checked)}
          >
            <input
              type='radio'
              id={value}
              value={value}
              checked={checked}
              onChange={onChangeArticleViewHandle}
              className={styles.input}
            />
            <Icon className={styles.icon} />
          </Flex>
        )
      })}
    </Flex>
  )
}

export default ArticleViewSelector
