import React from 'react'
import { RatingCard, SentRatingCard } from 'entities/Rating'
import { useSelector } from 'react-redux'
import { getAuthData } from 'entities/User'
import { Skeleton } from 'shared/ui/Skeleton'

import { useGetArticleRating, useSendRating } from '../api/articleRatingApi'

interface Props {
  id: string
  className?: string
}

const ArticleRating: React.FC<Props> = ({ id, className }) => {
  const userData = useSelector(getAuthData)

  const { data, isLoading } = useGetArticleRating({ userId: userData?.id ?? '', articleId: id })
  const [sendRating, { isLoading: isLoadingSendRating }] = useSendRating()

  const currentData = {
    rating: data?.[0]?.rating,
    review: data?.[0]?.review,
  }

  const isSent = !!data?.length

  const onSendRatingHandler = (rating: number, review?: string) => {
    sendRating({
      userId: userData?.id ?? '',
      articleId: id,
      rating,
      review,
    })
  }

  if (isLoading || isLoadingSendRating) {
    return <Skeleton height={35} />
  }

  return isSent ? (
    <SentRatingCard data={currentData} className={className} />
  ) : (
    <RatingCard data={currentData} onSend={onSendRatingHandler} className={className} />
  )
}

export default ArticleRating
