import React from 'react'
import cn from 'classnames'
import { Avatar } from 'shared/ui/Avatar'
import { Typography } from 'shared/ui/Typography'
import { Button } from 'shared/ui/Button'
import { useHistory } from 'react-router-dom'
import { ArticleBlockType, ArticleProps, ArticleTextBlock } from '../../model/types/article'

import styles from './ArticleLarge.module.scss'
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent'
import { ArticleViews } from '../ArticleViews'

const ArticleLarge: React.FC<ArticleProps> = ({ article, className }) => {
  const history = useHistory()
  const textBlock = article.blocks.find((block) => block.type === ArticleBlockType.TEXT) as ArticleTextBlock
  const textBlockWithParagraph = {
    ...textBlock,
    paragraphs: textBlock.paragraphs.slice(0, 1),
  }

  const onClickReadMore = () => {
    history.push(`/articles/${article.id}`)
  }

  return (
    <div className={cn(styles.article, className)}>
      <div className={styles.header}>
        <div className={styles.userInfo}>
          <Avatar src={article.user.avatar} size={40} />
          <Typography>{article.user.username}</Typography>
        </div>
        <Typography>{article.createdAt}</Typography>
      </div>

      <Typography as='h3' variant='title'>
        {article.title}
      </Typography>
      <Typography as='h5' variant='subTitle'>
        {article.subtitle}
      </Typography>

      <img src={article.img} alt={article.title} className={styles.img} />
      <ArticleTextBlockComponent block={textBlockWithParagraph} />

      <div className={styles.footer}>
        <Button variant='contained' onClick={onClickReadMore}>
          Читать далее...
        </Button>
        <ArticleViews views={article.views} />
      </div>
    </div>
  )
}

export default ArticleLarge
