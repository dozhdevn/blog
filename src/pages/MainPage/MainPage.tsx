import React from 'react'
import { useDispatch } from 'react-redux'
import { coreActions } from '../../core'

const MainPage = () => {
  const dispatch = useDispatch()

  const handleToggleTheme = () => {
    dispatch(coreActions.toggleTheme())
  }

  return (
    <div>
      <button onClick={handleToggleTheme}>toggle theme</button>
    </div>
  )
}

export default MainPage
