import React from 'react'
import { Link } from 'react-router-dom'
import Pokedex from '../../assets/img/pokedex.png'
import style from './LandingPage.module.css'

export default function LandingPage() {
  return (
    <div className={style.container}>
      <img className={style.pokedexImage} src={Pokedex} alt='pokedex title' />
      <Link to='/home'>
        <button className={style.buttonAccess}>
          <span className={style.focusOption}> ▶</span> Ingresar
        </button>
      </Link>
      <footer className={style.footerLandingPage}>
        <p>con cariño maat-mind 💛</p>
      </footer>
    </div>
  )
}
