import React from 'react'
import { ArticleDetails, articleReducer } from 'entities/Article'
import { useParams } from 'react-router-dom'

import { DynamicModuleLoader } from 'widgets/layouts/DynamicModuleLoader'
import { Page } from 'widgets/Page'
import { ArticleRecommendationList } from 'features/ArticleRecommendationList'
import styles from './ArticleDetailsPage.module.scss'
import { articleDetailsPageReducer } from '../../model/slices'
import ArticleDetailsComments from '../ArticleDetailsComments/ArticleDetailsComments'

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
        <ArticleRecommendationList className={styles.recommendation} />
        <ArticleDetailsComments id={id} />
      </Page>
    </DynamicModuleLoader>
  )
}

export default ArticleDetailsPage
