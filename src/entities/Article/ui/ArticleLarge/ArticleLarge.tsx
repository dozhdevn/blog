import React from 'react'
import cn from 'classnames'
import { Avatar } from 'shared/ui/Avatar'
import { Typography } from 'shared/ui/Typography'
import { Button } from 'shared/ui/Button'
import { useHistory } from 'react-router-dom'
import { Flex } from 'shared/ui/Flex'
import { ArticleProps, ArticleTextBlock } from '../../model/types/article'
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent'
import { ArticleViews } from '../ArticleViews'
import { ArticleBlockType } from '../../model/consts/consts'

import styles from './ArticleLarge.module.scss'

const ArticleLarge: React.FC<ArticleProps> = ({ article, className }) => {
  const history = useHistory()
  const textBlock = article.blocks.find((block) => block.type === ArticleBlockType.TEXT) as ArticleTextBlock
  const textBlockWithParagraph = {
    ...textBlock,
    paragraphs: textBlock?.paragraphs.slice(0, 1) || [],
  }

  const onClickReadMore = () => {
    history.push(`/articles/${article.id}`)
  }

  return (
    <Flex direction='column' align='stretch' gap={16} className={cn(styles.article, className)}>
      <Flex justify='between'>
        <Flex gap={8}>
          <Avatar src={article.user.avatar} size={40} />
          <Typography>{article.user.username}</Typography>
        </Flex>
        <Typography>{article.createdAt}</Typography>
      </Flex>

      <Typography as='h3' variant='title'>
        {article.title}
      </Typography>
      <Typography as='h5' variant='subTitle'>
        {article.subtitle}
      </Typography>

      <img src={article.img} alt={article.title} className={styles.img} />
      <ArticleTextBlockComponent block={textBlockWithParagraph} />

      <Flex justify='between'>
        <Button variant='contained' onClick={onClickReadMore}>
          Читать далее...
        </Button>
        <ArticleViews views={article.views} />
      </Flex>
    </Flex>
  )
}

export default ArticleLarge
