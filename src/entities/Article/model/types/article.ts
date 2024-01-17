import { User } from 'entities/User'
import { ArticleBlockType, ArticleType } from '../consts/consts'

export interface AcrticleBlockBase {
  id: string
  type: ArticleBlockType
}

export interface ArticleTextBlock extends AcrticleBlockBase {
  type: ArticleBlockType.TEXT
  title: string
  paragraphs: string[]
}

export interface ArticleImageBlock extends AcrticleBlockBase {
  type: ArticleBlockType.IMAGE
  title: string
  src: string
}

export interface ArticleCodeBlock extends AcrticleBlockBase {
  type: ArticleBlockType.CODE
  code: string
}

export type ArticleBlock = ArticleTextBlock | ArticleImageBlock | ArticleCodeBlock

export interface Article {
  id: string
  title: string
  subtitle: string
  img: string
  views: number
  createdAt: string
  user: User
  type: ArticleType[]
  blocks: ArticleBlock[]
}

export type ArticleProps = {
  article: Article
  isLoading: boolean
  target?: React.HTMLAttributeAnchorTarget
  className?: string
}
