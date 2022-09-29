import React from 'react'
import Pockecenter from '../assets/icons/pokecenter_icon.png'
import style from './Home.module.css'

const Home = () => {
  return (
    <div className={style.container}>
      <header className={style.headerHome}>
        <img
          className={style.pokecenterIcon}
          src={Pockecenter}
          alt='pokecenter icon'
        />
      </header>
      <footer className={style.footerHome}></footer>
    </div>
  )
}

export default Home
