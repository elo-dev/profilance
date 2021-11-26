import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { setNewsNotConfirmed } from '../../store/actionCreators/news'
import style from './CreateNews.module.scss'

const CreateNews = () => {
  const [title, setTitle] = useState<string>('')
  const [text, setText] = useState<string>('')
  const [errorTitle, setErrorTitle] = useState<boolean>(false)
  const [errorText, setErrorText] = useState<boolean>(false)
  const [newsOnModeration, setNewsOnModeration] = useState<boolean>(false)
  
  const { isUser, isAdmin } = useTypedSelector((state) => state.userReducer)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isUser && !isAdmin) {
      navigate('/')
    }
  }, [isUser, isAdmin, navigate])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const hours = new Date().getHours()
    const minutes = new Date().getMinutes()
    const date = hours + ':' + minutes
    let obj = { id: Math.random(), title, text, date }
    if(title && text){
      dispatch(setNewsNotConfirmed(obj))
      setText('')
      setTitle('')
      setErrorText(false)
      setErrorTitle(false)
      setNewsOnModeration(true)
      setTimeout(() => {
        setNewsOnModeration(false)
      }, 5000)
    } 
    if(!title){
      setErrorTitle(true)
    }
    if(!text){
      setErrorText(true)
    }
  }

  return (
    <section className={style.createNews__container}>
      <h2>Создать новость</h2>
      <form className={style.createNews__form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Заголовок"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={errorTitle ? style.form__title + ' ' + style.error : style.form__title}
        />
        <textarea
          cols={20}
          rows={3}
          placeholder="Текст новости"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className={errorText ? style.form__text + ' ' + style.error : style.form__text}
        />
        <button>Опубликовать</button>
      </form>
      {newsOnModeration && <span className={style.createNews__message}>Новость на модерации</span>}
    </section>
  )
}

export default CreateNews
