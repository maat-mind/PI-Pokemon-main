import React from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.css'

export default function LandingPage() {
  return (
    <div className='container'>
      <h1>Bienvenido Entrenador</h1>
      <Link to='/home'>
        <button>Ingresar</button>
      </Link>
    </div>
  )
}
