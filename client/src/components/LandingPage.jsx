import React from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.css'

export default function LandingPage() {
  return (
    <div className='container'>
      <span className='pokedex-title'></span>
      <Link to='/home'>
        <button>
          <span className='focus-option'> ▶</span> Ingresar
        </button>
      </Link>
      <h2>con cariño maat-mind 💛</h2>
    </div>
  )
}
