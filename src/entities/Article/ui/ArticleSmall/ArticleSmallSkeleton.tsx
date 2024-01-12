import { Skeleton } from 'shared/ui/Skeleton'
import { Flex } from 'shared/ui/Flex'
import styles from './ArticleSmall.module.scss'

const ArticleSmallSkeleton = () => (
  <Flex direction='column' justify='center' align='stretch' gap={16} className={styles.article}>
    <Skeleton width='100%' height={155} />
    <Flex justify='between'>
      <Skeleton width={150} height={25} />
      <Skeleton width={70} height={25} />
    </Flex>
    <Skeleton width={150} height={20} />
  </Flex>
)

export default ArticleSmallSkeleton
