import { withAsyncReducers } from 'core/hocs/withAsyncReducers'
import { ArticleDetails, articleReducer } from 'entities/Article'
import React from 'react'
import { useParams } from 'react-router-dom'

const ArticleDetailsPage: React.FC = () => {
  const { id } = useParams<{id: string}>()
  return (
    <ArticleDetails id={id} />
  )
}

const config = {
  reducers: {
    article: articleReducer,
  },
}

export default withAsyncReducers(ArticleDetailsPage, config)
