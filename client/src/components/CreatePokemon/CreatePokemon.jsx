import React from 'react'
import { Link } from 'react-router-dom'
import style from './CreatePokemon.module.css'

const CreatePokemon = () => {
  return (
    <div className={style.container}>
      <Link to='/home'>
        <button>Regresar</button>
      </Link>
      <h1>Crea tu pokemón</h1>
      <main className={style.createPokemon}>
        <span className={style.asideImage}>
          <img
            className={style.imgCreate}
            src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/172.png'
            alt='imagen de pokemon'
          />
        </span>
        <form className={style.formCreate}>
          <label className={style.labelCreate}>
            Data1: <input />
          </label>
          <label className={style.labelCreate}>
            Data2: <input />
          </label>

          <label className={style.labelCreate}>
            Data3: <input />
          </label>

          <label className={style.labelCreate}>
            Data4: <input />
          </label>

          <label className={style.labelCreate}>
            Data5: <input />
          </label>

          <label className={style.labelCreate}>
            Data6: <input />
          </label>

          <label className={style.labelCreate}>
            Data7: <input />
          </label>

          <label className={style.labelCreate}>
            Data8: <input />
          </label>
        </form>
      </main>
    </div>
  )
}

export default CreatePokemon
