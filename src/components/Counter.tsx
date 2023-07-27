import { useState } from "react"

import styles from './Counter.module.scss'

export const Counter = () => {
  const [count, setCount] = useState(0)

  const handleCounter = () => {
    setCount(prev => prev + 1)
  }

  return (
    <div className={styles.root}>
      <h1>{count}</h1>
      <button className={styles.button} onClick={handleCounter}>+</button>
    </div>
  )
}