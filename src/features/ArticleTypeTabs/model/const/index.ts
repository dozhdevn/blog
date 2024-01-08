import { ArticleType } from 'entities/Article/model/types/article'

export const typeTabs = [
  {
    title: 'Все статьи',
    value: ArticleType.ALL,
  },
  {
    title: 'Айти',
    value: ArticleType.IT,
  },
  {
    title: 'Экономика',
    value: ArticleType.ECONOMICS,
  },
  {
    title: 'Наука',
    value: ArticleType.SCIENCE,
  },
]
