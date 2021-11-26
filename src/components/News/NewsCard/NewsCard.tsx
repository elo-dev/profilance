import React from 'react'
import { INews } from '../../../types/newsTypes/types'
import style from './NewsCard.module.scss'

interface NewsCardProps {
  item: INews
  children?: React.ReactChildren | React.ReactChild
}

export const NewsCard: React.FC<NewsCardProps> = ({ item, children }) => {
  return (
    <div className={style.news__card}>
      <h3 className={style.news__title}>{item.title}</h3>
      <p className={style.news__text}>{item.text}</p>
      <span className={style.news__date}>Время публикации: {item.date}</span>
      {children}
    </div>
  )
}
