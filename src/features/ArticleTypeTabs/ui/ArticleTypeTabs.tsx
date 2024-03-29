import React from 'react'
import { Tabs } from 'shared/ui/Tabs'
import { ArticleType } from 'entities/Article'

import { typeTabs } from '../model/const'

interface Props {
  value: ArticleType
  onChange: (value: ArticleType) => void
  className?: string
}

const ArticleTypeTabs: React.FC<Props> = ({ value, onChange, className }) => (
  <Tabs value={value} tabs={typeTabs} onChange={onChange} className={className} />
)

export default ArticleTypeTabs
