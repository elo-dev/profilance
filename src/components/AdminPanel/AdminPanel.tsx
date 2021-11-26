import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { NewsCard } from '../News/NewsCard/NewsCard'
import style from './AdminPanel.module.scss'
import { useDispatch } from 'react-redux'
import { deleteNews, setNewsConfirmed } from '../../store/actionCreators/news'
import { useTypedSelector } from '../../hooks/useTypedSelector'

export const AdminPanel = () => {
  const { isAdmin } = useTypedSelector((state) => state.userReducer)
  const { news_not_confirmed } = useTypedSelector((state) => state.newsReducer)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    if (!isAdmin) {
      navigate('/')
    }
  }, [isAdmin, navigate])

  const onAcceptNews = (id: number) => {
    const acceptNews = news_not_confirmed.filter((item) => {
      return item.id === id
    })

    const objectAcceptNews = acceptNews.reduce((result, item) => {
      return item
    })

    dispatch(setNewsConfirmed(objectAcceptNews))
    onReject(id)
  }

  const onReject = (id: number) => {
    dispatch(deleteNews(id))
  }

  return (
    <section className={style.adminPanel__container}>
      <h2>Админ панель</h2>
      <div className={style.adminPanel}>
        {news_not_confirmed.length === 0
        ? <h3>Новостей нет</h3>
        : null
        }
        {news_not_confirmed &&
          news_not_confirmed.map((item) => (
            <NewsCard key={item.id} item={item}>
              <div className={style.adminPanel__confirmBtns}>
                <button
                  className={style.confirmBtn__accept}
                  onClick={() => onAcceptNews(item.id)}
                >
                  Одобрить
                </button>
                <button
                  className={style.confirmBtn__reject}
                  onClick={() => onReject(item.id)}
                >
                  Отклонить
                </button>
              </div>
            </NewsCard>
          ))}
      </div>
    </section>
  )
}
