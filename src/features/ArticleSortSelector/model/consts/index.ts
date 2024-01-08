import { ArticleSortField } from 'entities/Article'
import { SortOrder } from 'shared/types'

export const sortOptions = [
  {
    value: ArticleSortField.VIEWS,
    label: 'Просмотрам',
  },
  {
    value: ArticleSortField.TITLE,
    label: 'Названию',
  },
  {
    value: ArticleSortField.CREATED,
    label: 'Дате',
  },
]

export const orderOptions: { value: SortOrder; label: string }[] = [
  {
    value: 'asc',
    label: 'По возрастанию',
  },
  {
    value: 'desc',
    label: 'По убыванию',
  },
]
