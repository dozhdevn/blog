import React from 'react'
import { ArticleDetails, articleReducer } from 'entities/Article'
import { useParams } from 'react-router-dom'
import { DynamicModuleLoader } from 'widgets/layouts/DynamicModuleLoader'
import { Page } from 'widgets/Page'
import { ArticleRecommendationList } from 'features/ArticleRecommendationList'
import { ArticleRating } from 'features/ArticleRating'

import { articleDetailsPageReducer } from '../../model/slices'
import ArticleDetailsComments from '../ArticleDetailsComments/ArticleDetailsComments'

import styles from './ArticleDetailsPage.module.scss'

const config = {
  reducers: {
    article: articleReducer,
    articleDetailsPage: articleDetailsPageReducer,
  },
}

const ArticleDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()

  return (
    <DynamicModuleLoader {...config}>
      <Page>
        <ArticleDetails id={id} />
        <ArticleRating id={id} className={styles.rating} />
        <ArticleRecommendationList className={styles.recommendation} />
        <ArticleDetailsComments id={id} />
      </Page>
    </DynamicModuleLoader>
  )
}

export default ArticleDetailsPage
