import React from 'react'
import cn from 'classnames'
import { Flex } from 'shared/ui/Flex'
import { RatingCardData } from 'entities/Rating/model/types/types'
import { Typography } from 'shared/ui/Typography'
import { RatingStar } from 'shared/ui/RatingStar'

import styles from './SentRatingCard.module.scss'

interface Props {
  data?: RatingCardData
  className?: string
}

const SentRatingCard: React.FC<Props> = ({ data, className }) => (
  <Flex direction='column' className={cn(styles.ratingStar, className)}>
    <Typography variant='subTitle'>Cпасибо за отзыв!</Typography>
    <RatingStar value={data?.rating} readonly />
  </Flex>
)

export default SentRatingCard
