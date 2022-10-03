import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { filterByType, getAllPokemons } from '../actions'
import Pokecenter from '../assets/icons/pokecenter_icon.png'
import Card from './Card/Card'
import style from './Home.module.css'
import Pagination from './Pagination/Pagination'

const Home = () => {
  const dispatch = useDispatch()
  const allPokemons = useSelector((state) => state.pokemons)

  // Filter
  const [types, setTypes] = useState('all')

  function HandleFilterByType(e) {
    e.preventDefault()
    dispatch(filterByType(e.target.value))
    setCurrentPage(1)
    setCurrentPokemons(allPokemons?.slice(range.first, range.last))
    setTypes(e.target.value)
  }

  // Pagination
  const [pokemonPerPage] = useState(12)
  const [range, setRange] = useState({ first: 0, last: 12 })
  const [currentPage, setCurrentPage] = useState(1)
  const pagination = (page) => {
    setCurrentPage(page)
  }
  const [currentPokemons, setCurrentPokemons] = useState(
    allPokemons?.slice(range.first, range.last)
  )

  useEffect(() => {
    setCurrentPokemons(allPokemons?.slice(range.first, range.last))
  }, [allPokemons, range.first, range.last])

  useEffect(() => {
    setRange({
      first: (currentPage - 1) * pokemonPerPage,
      last: currentPage * pokemonPerPage,
    })
  }, [currentPage, pokemonPerPage])

  useEffect(() => {
    dispatch(getAllPokemons())
  }, [dispatch])

  const handleClick = (e) => {
    e.preventDefault()
    setTypes('all')
    setCurrentPage(1)
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
          <select
            value={types}
            onChange={(e) => {
              HandleFilterByType(e)
            }}>
            <option value='all'>Todos los tipos</option>
            <option value='bug'>Bug</option>
            <option value='dragon'>Dragon</option>
            <option value='dark'>Dark</option>
            <option value='electric'>Electric</option>
            <option value='fairy'>Fairy</option>
            <option value='fighting'>Fighting</option>
            <option value='fire'>Fire</option>
            <option value='flying'>Flying</option>
            <option value='grass'>Grass</option>
            <option value='ghost'>Ghost</option>
            <option value='ground'>Ground</option>
            <option value='ice'>Ice</option>
            <option value='normal'>Normal</option>
            <option value='shadow'>Shadow</option>
            <option value='poison'>Poison</option>
            <option value='physic'>Psychic</option>
            <option value='rock'>Rock</option>
            <option value='steel'>Steel</option>
            <option value='water'>Water</option>
            <option value='unknown'>Unknown</option>
          </select>
        </section>
        <Link to={'/'}>
          <img
            className={style.pokecenterIcon}
            src={Pokecenter}
            alt='pokecenter icon'
          />
        </Link>
      </header>

      <section className={style.cards}>
        {currentPokemons?.map((p) => {
          return (
            <>
              <Link to={`/home/${p.id}`}>
                <Card
                  key={p.id}
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
      <footer className={style.footerHome}>
        <Pagination
          pokemonPerPage={pokemonPerPage}
          allPokemons={allPokemons?.length}
          pagination={pagination}
          currentPage={currentPage}
        />
      </footer>
    </div>
  )
}

export default Home
