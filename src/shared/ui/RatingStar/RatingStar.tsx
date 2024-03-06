import React, { useEffect, useState } from 'react'
import cn from 'classnames'
import StarIcon from 'shared/assets/icons/svg/star.svg'

import { Flex } from '../Flex'
import { IconButton } from '../IconButton'

import styles from './RatingStar.module.scss'

interface Props {
  value?: Nullable<number>
  onSelect?: (value: Nullable<number>) => void
  className?: string
}

const RatingStar: React.FC<Props> = ({ value = 0, onSelect, className }) => {
  const [selected, setSelected] = useState(value)
  const [hover, setHover] = useState(0)

  const onMouseEnterHandler = (rating: number) => () => {
    setHover(rating)
  }

  const onMouseLeaveHandler = () => {
    setHover(0)
  }

  const onClickStarHandler = (rating: number) => () => {
    const currentRating = selected === rating ? null : rating
    onSelect?.(currentRating)
    setSelected(currentRating)
  }

  useEffect(() => {
    setSelected(value)
  }, [value])

  return (
    <Flex className={cn(styles.rating, className)}>
      {Array.from({ length: 5 }).map((_, index) => {
        const rating = index + 1
        return (
          <IconButton
            key={rating}
            className={styles.star}
            onClick={onClickStarHandler(rating)}
            onMouseEnter={onMouseEnterHandler(rating)}
            onMouseLeave={onMouseLeaveHandler}
          >
            <StarIcon
              className={cn(styles.icon, {
                [styles.active]: rating <= (hover || (selected ?? 0)),
              })}
            />
          </IconButton>
        )
      })}
    </Flex>
  )
}

export default RatingStar
