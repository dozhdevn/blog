import React from 'react'

import { Loader } from 'components/Loader'

import styles from './PageLoader.module.scss'

export const PageLoader: React.FC = () => (
  <div className={styles.pageLoader}>
    <Loader />
  </div>
)
