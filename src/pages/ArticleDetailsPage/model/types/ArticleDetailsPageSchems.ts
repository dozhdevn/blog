import { ArticleCommentListSchema } from 'features/ArticleCommentList'
import { ArticleRecommendationsListSchema } from 'features/ArticleRecommendationList'

export interface ArticleDetailsPageSchema {
  articleDetailsCommentsReducer: ArticleCommentListSchema
  articleRecommendationsReducer: ArticleRecommendationsListSchema
}
