import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import style from './News.module.scss'
import { NewsCard } from './NewsCard/NewsCard'

export const News = () => {
  const { isUser, isAdmin } = useTypedSelector(state => state.userReducer)
  const { news_confirmed } = useTypedSelector(state => state.newsReducer)
  const [searchValue, setSearchValue] = useState<string>('')

  const newsFilter = news_confirmed.filter((item) => {
    return item.title.toLowerCase().includes(searchValue.toLowerCase())
  })

  return (
    <section className={style.news__container}>
      <h2>Новости</h2>
      <div className={style.news__search}>
        <input
          type="text"
          placeholder="Поиск новости"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        {isUser || isAdmin ? (
          <NavLink to="/create-news">
            <button className={style.news__addNewsBtn}>Создать новость</button>
          </NavLink>
        ) : null}
      </div>
      <div className={style.news__cards}>
        {news_confirmed.length === 0 || newsFilter.length === 0
        ? <h3>Новостей нет</h3>
        : null
        }
        {!searchValue
          ? news_confirmed.map((item) => <NewsCard key={item.id} item={item} />)
          : newsFilter.map((item) => <NewsCard key={item.id} item={item} />)}
      </div>
    </section>
  )
}
