import React, { useEffect, useState } from 'react'
import cn from 'classnames'
import { Flex } from 'shared/ui/Flex'
import { RatingStar } from 'shared/ui/RatingStar'
import { TextArea } from 'shared/ui/TextArea'
import { Typography } from 'shared/ui/Typography'
import { Button } from 'shared/ui/Button'
import { RatingCardData } from 'entities/Rating/model/types/types'

import styles from './RatingCard.module.scss'

interface Props {
  data?: RatingCardData
  title?: string
  onSend?: (rating: number, review?: string) => void
  className?: string
}

const RatingCard: React.FC<Props> = ({
  data, title, className, onSend,
}) => {
  const { rating = null } = data ?? {}
  const [ratingValue, setRating] = useState<Nullable<number>>(rating)
  const [reviewValue, setReviewValue] = useState('')

  const onSelectRatingHandler = (value: Nullable<number>) => {
    setRating(value)
  }

  const onChangeReviewHandler = (value: string) => {
    setReviewValue(value)
  }

  const onSendReviewHandler = () => {
    if (ratingValue !== null) {
      onSend?.(ratingValue, reviewValue)

      setRating(null)
      setReviewValue('')
    }
  }

  return (
    <Flex direction='column' className={cn(styles.ratingStar, className)}>
      {title && <Typography variant='subTitle'>{title}</Typography>}
      <RatingStar value={ratingValue} onSelect={onSelectRatingHandler} />
      <TextArea value={reviewValue} onChange={onChangeReviewHandler} />
      <Button variant='contained' onClick={onSendReviewHandler} className={styles.button}>
        Отправить отзыв
      </Button>
    </Flex>
  )
}

export default RatingCard
