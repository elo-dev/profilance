import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo/logo.svg'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { adminSignOut, userSignOut } from '../../store/actionCreators/user'
import { Popup } from '../Popup/Popup'
import style from './Header.module.scss'

export const Header = () => {
  const [modalActive, setModalActive] = useState<boolean>(false)
  const { isUser, isAdmin } = useTypedSelector(state => state.userReducer)
  const dispatch = useDispatch()

  const signOut = () => {
    if(isUser){
      dispatch(userSignOut())
    } else if(isAdmin){
      dispatch(adminSignOut())
    }
  }

  return (
    <>
      <header>
        <nav className={style.menu}>
          <div className={style.menu__wrapper}>
            <NavLink to="/">
              <img src={logo} alt="logo" />
            </NavLink>
            <div className={style.menu__info}>
              <NavLink
                to="/news"
                className={({ isActive }) =>
                  style.menu__newsLink + ' ' + (isActive ? style.active : '')
                }
              >
                <p>Новости</p>
              </NavLink>
              {isAdmin && (
                <NavLink to='/admin-panel' className={({ isActive }) =>
                  style.menu__newsLink + ' ' + (isActive ? style.active : '')
                }>
                <p>Админ панель</p>
              </NavLink>
              )}
              {isUser || isAdmin ? (
                <button
                  className={style.menu__signBtn}
                  onClick={signOut}
                >
                  Выйти
                </button>
              ) : (
                <button
                  className={style.menu__signBtn}
                  onClick={() => setModalActive(true)}
                >
                  Войти
                </button>
              )}
            </div>
          </div>
        </nav>
      </header>
      <Popup modalActive={modalActive} setModalActive={setModalActive} />
    </>
  )
}
