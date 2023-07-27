import { useState } from "react"

import './Counter.scss'

export const Counter = () => {
  const [count, setCount] = useState(0)

  const handleCounter = () => {
    setCount(prev => prev + 1)
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleCounter}>+</button>
    </div>
  )
}