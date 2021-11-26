import React from 'react'
import { Header } from './components/Header/Header'
import { MainPage } from './components/MainPage/MainPage'
import { News } from './components/News/News'
import { Route, Routes } from 'react-router'
import CreateNews from './components/CreateNews/CreateNews'
import style from './App.module.scss'
import { AdminPanel } from './components/AdminPanel/AdminPanel'

function App() {
  return (
    <div className={style.app__container}>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/news" element={<News />} />
        <Route path="/create-news" element={<CreateNews />} />
        <Route path="/admin-panel" element={<AdminPanel />} />
      </Routes>
    </div>
  )
}

export default App
