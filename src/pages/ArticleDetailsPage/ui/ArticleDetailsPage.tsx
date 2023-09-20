import React from 'react'
import { useParams } from 'react-router-dom'

const ArticleDetailsPage = () => {
  const { id } = useParams<{id: string}>()
  return (
    <div>
      ArticleDetailsPage -
      {id}
    </div>
  )
}

export default ArticleDetailsPage
