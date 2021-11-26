import React from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector'

export const MainPage = () => {
  const { username } = useTypedSelector(state => state.userReducer)
  return (
    <div>
      <h1>Привет, {username ? username : 'Гость'}</h1>
    </div>
  )
}
