import { User } from 'entities/User'

export enum ArticleType {
  ALL = 'ALL',
  IT = 'IT',
  SCIENCE = 'SCIENCE',
  ECONOMICS = 'ECONOMICS',
}

export enum ArticleBlockType {
  TEXT = 'TEXT',
  CODE = 'CODE',
  IMAGE = 'IMAGE',
}

export enum ArticleSortField {
  VIEWS = 'views',
  TITLE = 'title',
  CREATED = 'createdAt',
}

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

export enum ViewModeArticle {
  List = 'list',
  Tile = 'tile',
}

export type ArticleProps = {
  article: Article
  isLoading: boolean
  className?: string
}
