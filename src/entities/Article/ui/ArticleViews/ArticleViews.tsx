import React from 'react'
import EyeIcon from 'shared/assets/icons/svg/eye.svg'
import { Typography } from 'shared/ui/Typography'
import { Flex } from 'shared/ui/Flex'

import styles from './ArticleViews.module.scss'

interface Props {
  views: number
  className?: string
}

const ArticleViews: React.FC<Props> = ({ views, className }) => (
  <Flex className={className}>
    <EyeIcon className={styles.icon} />
    <Typography>{views}</Typography>
  </Flex>
)

export default ArticleViews
