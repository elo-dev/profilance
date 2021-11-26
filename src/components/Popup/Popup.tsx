import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { adminAuth, userAuth } from '../../store/actionCreators/user'
import style from './Popup.module.scss'

interface PopupProps {
  modalActive: boolean
  setModalActive: (value: boolean) => void
}

export const Popup: React.FC<PopupProps> = ({ modalActive, setModalActive }) => {
  const [loginValue, setLoginValue] = useState<string>('')
  const [passwordValue, setPasswordValue] = useState<string>('')
  const [loginError, setLoginError] = useState<boolean>(false)
  const [passwordError, setPasswordError] = useState<boolean>(false)

  const LOGIN = 'Dima'
  const PASSWORD = '1234'

  const LOGIN_ADMIN = 'admin'
  const PASSWORD_ADMIN = '1234'

  const dispatch = useDispatch()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (loginValue === LOGIN && passwordValue === PASSWORD) {
      dispatch(userAuth(loginValue))
      setLoginValue('')
      setPasswordValue('')
      setModalActive(false)
      setLoginError(false)
      setPasswordError(false)
    } else if (loginValue === LOGIN_ADMIN && passwordValue === PASSWORD_ADMIN) {
      dispatch(adminAuth(loginValue))
      setLoginValue('')
      setPasswordValue('')
      setModalActive(false)
      setLoginError(false)
      setPasswordError(false)
    }
    if (loginValue !== LOGIN) {
      setLoginError(true)
    }
    if (passwordValue !== PASSWORD) {
      setPasswordError(true)
    }
  }

  useEffect(() => {
    if (!modalActive) {
      setLoginValue('')
      setPasswordValue('')
      setLoginError(false)
      setPasswordError(false)
    }
  }, [modalActive])

  return (
    <div
      className={
        modalActive
          ? style.popup__modal + ' ' + style.active
          : style.popup__modal
      }
      onClick={() => setModalActive(false)}
    >
      <div
        className={
          modalActive
            ? style.popup__auth + ' ' + style.active
            : style.popup__auth
        }
        onClick={(e) => e.stopPropagation()}
      >
        <h2>Авторизация</h2>
        <form className={style.popup__form} onSubmit={handleSubmit}>
          <div className={style.form__login}>
            <p>Логин:</p>
            <input
              className={
                loginError
                  ? style.login__input + ' ' + style.error
                  : style.login__input
              }
              type="text"
              placeholder="Логин"
              value={loginValue}
              onChange={(e) => setLoginValue(e.target.value)}
            />
          </div>
          <div className={style.form__password}>
            <p>Пароль:</p>
            <input
              className={
                passwordError
                  ? style.password__input + ' ' + style.error
                  : style.password__input
              }
              type="password"
              placeholder="Пароль"
              value={passwordValue}
              onChange={(e) => setPasswordValue(e.target.value)}
            />
          </div>
          <button className={style.form__btnSubmit}>Войти</button>
        </form>
      </div>
    </div>
  )
}
