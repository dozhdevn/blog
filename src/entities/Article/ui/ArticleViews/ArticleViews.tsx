import React from 'react'
import cn from 'classnames'

import EyeIcon from 'shared/assets/icons/svg/eye.svg'

import { Typography } from 'shared/ui/Typography'
import styles from './ArticleViews.module.scss'

interface Props {
  views: number
  className?: string
}

const ArticleViews: React.FC<Props> = ({ views, className }) => (
  <div className={cn(styles.views, className)}>
    <EyeIcon className={styles.icon} />
    <Typography>{views}</Typography>
  </div>
)

export default ArticleViews
