import React from 'react'

import { Loader } from 'shared/ui/Loader'

import { Flex } from 'shared/ui/Flex'
import styles from './PageLoader.module.scss'

export const PageLoader: React.FC = () => (
  <Flex justify='center' className={styles.pageLoader}>
    <Loader />
  </Flex>
)
