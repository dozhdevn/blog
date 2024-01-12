import { Skeleton } from 'shared/ui/Skeleton'
import { Flex } from 'shared/ui/Flex'

import styles from './ArticleLarge.module.scss'

const ArticleLargeSkeleton = () => (
  <Flex direction='column' align='stretch' gap={16} className={styles.article}>
    <Flex justify='between'>
      <Flex gap={8}>
        <Skeleton width={40} height={40} border='50%' />
        <Skeleton width={150} height={20} />
      </Flex>
      <Skeleton width={150} height={20} />
    </Flex>
    <Skeleton width={250} height={40} />
    <Skeleton width={350} height={40} />
    <Skeleton width='100%' height={320} />

    <Flex justify='between'>
      <Skeleton width={150} height={40} />
      <Skeleton width={150} height={40} />
    </Flex>
  </Flex>
)

export default ArticleLargeSkeleton
