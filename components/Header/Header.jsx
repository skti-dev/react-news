import React, { useState, useEffect } from 'react'
import HeadOptions from './HeadOptions'
import styles from './Header.module.css'

const Header = () => {

  const days = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"]

  const [time, setTime] = useState(new Date().toLocaleTimeString().slice(0, 5))
  const [date, setDate] = useState(new Date().toLocaleDateString())
  const [day, setDay] = useState(days[new Date().getUTCDay()])

  const checkTime = () => {
    setTime(new Date().toLocaleTimeString().slice(0, 5))
  }

  const checkDate = () => {
    setDate(new Date().toLocaleDateString())
  }

  const checkDay = () => {
    setDay(new Date().getUTCDay())
  }


  useEffect(() => {
    setInterval(() => {
      checkTime()
      if(time == '23:59') {
        checkDate()
        checkDay()
      }
    }, 10000)
  })

  const currentDateTime = `${day}, ${time} - ${date}`

  return(
    <>
      <HeadOptions />
      <header className={styles.header}>
        <div className="menu"></div>
        <div className={styles.title}>
          <span className="icon bigger dark">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
          </span>
          <h1> News </h1>
        </div>
        <div className={styles.subtitle}>
          <span className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill="none" d="M0 0h24v24H0z"/><path fill="currentColor" d="M17 18v-2h.5a3.5 3.5 0 1 0-2.5-5.95V10a6 6 0 1 0-8 5.659v2.089a8 8 0 1 1 9.458-10.65A5.5 5.5 0 1 1 17.5 18l-.5.001zm-4-1.995h3l-5 6.5v-4.5H8l5-6.505v4.505z"/></svg>    
          </span>
          <h2> {currentDateTime} </h2>
        </div>
        <div className={styles.search}>
          <span className="icon clickable" title="Clique para pesquisar">  
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </span>
          <input type="text" placeholder="Pesquise notícias e assuntos" />
        </div>
      </header>
    </>
  )
}

export default Header
