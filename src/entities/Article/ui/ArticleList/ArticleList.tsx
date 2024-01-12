import React from 'react'
import { Flex } from 'shared/ui/Flex'
import { Article, ArticleProps, ViewModeArticle } from '../../model/types/article'
import { ArticleLarge } from '../ArticleLarge'

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
    <Flex wrap='wrap' gap={20} className={className}>
      {content}
      {skeletons}
    </Flex>
  )
}

export default ArticleList
