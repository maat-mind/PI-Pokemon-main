import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getAllPokemons } from '../actions'
import Pokecenter from '../assets/icons/pokecenter_icon.png'
import Card from './Card/Card'
import style from './Home.module.css'

const Home = () => {
  const dispatch = useDispatch()
  const allPokemons = useSelector((state) => state.pokemons)

  useEffect(() => {
    dispatch(getAllPokemons())
  }, [dispatch])

  const handleClick = (e) => {
    e.preventDefault()
    dispatch(getAllPokemons())
  }

  return (
    <div className={style.container}>
      <header className={style.headerHome}>
        <section className={style.filters}>
          <Link to='/create'>Crear Pokemón</Link>
          <button
            onClick={(e) => {
              handleClick(e)
            }}>
            Cargar todos los pokemón
          </button>
          <select>
            <option value='az'>Ascendente</option>
            <option value='za'>Descendente</option>
          </select>
          <select>
            <option value='all'>Todos</option>
            <option value='api'>Originales</option>
            <option value='created'>Creados</option>
          </select>
          <select>
            <option value='all'>Todos</option>
            <option value='attack'>Por ataque</option>
          </select>
        </section>
        <img
          className={style.pokecenterIcon}
          src={Pokecenter}
          alt='pokecenter icon'
        />
      </header>
      <section className={style.cards}>
        {allPokemons?.map((p) => {
          return (
            <>
              <Link to={`/home/${p.id}`}>
                <Card
                  name={p.name}
                  img={p.img}
                  hp={p.hp}
                  attack={p.attack}
                  defense={p.defense}
                  weight={p.weight}
                  height={p.height}
                  speed={p.speed}
                  types={p.types}
                />
              </Link>
            </>
          )
        })}
      </section>
      <footer className={style.footerHome}></footer>
    </div>
  )
}

export default Home
