import React from 'react'
import cn from 'classnames'

import { ArticleSortField } from 'entities/Article'
import { SortOrder } from 'shared/types'

import Select from 'shared/ui/Select'
import styles from './ArticleSortSelector.module.scss'
import { orderOptions, sortOptions } from '../model/consts'

interface Props {
  sort: ArticleSortField
  order: SortOrder
  onChangeSort: (sort: ArticleSortField) => void
  onChangeOrder: (order: SortOrder) => void
  className?: string
}

const ArticleSortSelector: React.FC<Props> = ({
  sort, order, onChangeSort, onChangeOrder, className,
}) => (
  <div className={cn(styles.root, className)}>
    <Select value={sort} options={sortOptions} onChange={onChangeSort} label='Сортировать по' />
    <Select value={order} options={orderOptions} onChange={onChangeOrder} />
  </div>
)

export default ArticleSortSelector
