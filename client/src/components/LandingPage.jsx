import React from 'react'
import { Link } from 'react-router-dom'
import Pokedex from '../assets/img/pokedex.png'
import './LandingPage.css'

export default function LandingPage() {
  return (
    <div className='container'>
      {/* <span className='pokedex-title'></span> */}
      <img src={Pokedex} alt='' />
      <Link to='/home'>
        <button>
          <span className='focus-option'> ▶</span> Ingresar
        </button>
      </Link>
      <h2>con cariño maat-mind 💛</h2>
    </div>
  )
}
