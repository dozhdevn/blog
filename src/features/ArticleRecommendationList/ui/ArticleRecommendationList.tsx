import { useSelector } from 'react-redux'
import { Typography } from 'shared/ui/Typography'
import { ArticleList } from 'entities/Article/ui/ArticleList'
import { ViewModeArticle } from 'entities/Article/model/types/article'
import { getArticleRecommendations, getLoadingArticleRecommendations } from '../model/selectors/articleRecomendations'

import styles from './ArticleRecommendationList.module.scss'

const ArticleRecommendationList = ({ className }: { className?: string }) => {
  const recommendations = useSelector(getArticleRecommendations)
  const loading = useSelector(getLoadingArticleRecommendations)

  return (
    <div className={className}>
      <Typography variant='subTitle' as='h3' className={styles.title}>Рекомендуем</Typography>
      <ArticleList articles={recommendations} isLoading={loading} viewMode={ViewModeArticle.Tile} target='_blank' />
    </div>
  )
}

export default ArticleRecommendationList
