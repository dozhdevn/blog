import { Typography } from 'shared/ui/Typography'
import { ArticleList } from 'entities/Article/ui/ArticleList'
import { ViewModeArticle } from 'entities/Article/model/types/article'

import styles from './ArticleRecommendationList.module.scss'
import { useArticleRecommendationsList } from '../api/recommendationsApi'

const ArticleRecommendationList = ({ className }: { className?: string }) => {
  const { data: recommendations, isLoading } = useArticleRecommendationsList(4)

  if (!recommendations) {
    return null
  }

  return (
    <div className={className}>
      <Typography variant='subTitle' as='h3' className={styles.title}>
        Рекомендуем
      </Typography>
      <ArticleList articles={recommendations} isLoading={isLoading} viewMode={ViewModeArticle.Tile} target='_blank' />
    </div>
  )
}

export default ArticleRecommendationList
