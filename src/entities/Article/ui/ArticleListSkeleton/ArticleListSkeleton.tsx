/* eslint-disable react/no-array-index-key */
import React from 'react'
import { getQuantityArticles } from '../../lib/getQuantityArticles'
import { ViewModeArticle } from '../../model/types/article'
import ArticleLargeSkeleton from '../ArticleLarge/ArticleLargeSkeleton'
import ArticleSmallSkeleton from '../ArticleSmall/ArticleSmallSkeleton'

interface Props {
  viewMode: ViewModeArticle
}

const ArticleListSkeleton: React.FC<Props> = ({ viewMode }) => {
  const quantitySkeleton = getQuantityArticles(viewMode)

  return (
    <>
      {Array.from({ length: quantitySkeleton }).map((_, index) => {
        if (viewMode === ViewModeArticle.List) {
          return <ArticleLargeSkeleton key={index} />
        }
        return <ArticleSmallSkeleton key={index} />
      })}
    </>
  )
}

export default ArticleListSkeleton
