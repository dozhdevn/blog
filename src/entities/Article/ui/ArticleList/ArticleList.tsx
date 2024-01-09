import React from 'react'
import cn from 'classnames'
import { Article, ArticleProps, ViewModeArticle } from '../../model/types/article'
import { ArticleLarge } from '../ArticleLarge'

import styles from './ArticleList.module.scss'
import { ArticleSmall } from '../ArticleSmall'
import { ArticleListSkeleton } from '../ArticleListSkeleton'

interface Props {
  articles: Article[]
  isLoading: boolean
  viewMode: ViewModeArticle
  target?: React.HTMLAttributeAnchorTarget
  className?: string
}

const ArticleMap: Record<ViewModeArticle, React.FC<ArticleProps>> = {
  [ViewModeArticle.Tile]: ArticleSmall,
  [ViewModeArticle.List]: ArticleLarge,
}

const ArticleList: React.FC<Props> = ({
  articles, isLoading, viewMode, target, className,
}) => {
  const ArticleComponent = ArticleMap[viewMode]

  const content = articles.length > 0
    && articles.map((article) => (
      <ArticleComponent key={article.id} article={article} isLoading={isLoading} target={target} />
    ))

  const skeletons = isLoading && <ArticleListSkeleton viewMode={viewMode} />
  return (
    <div className={cn(styles.list, className)}>
      {content}
      {skeletons}
    </div>
  )
}

export default ArticleList
