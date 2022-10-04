import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Pokecenter from '../assets/icons/pokecenter_icon.png'
import {
  filterByType,
  filterByUserCreated,
  getAllPokemons,
  orderByName,
} from '../redux/actions'
import Card from './Card/Card'
import style from './Home.module.css'
import Pagination from './Pagination/Pagination'

const Home = () => {
  const dispatch = useDispatch()
  const allPokemons = useSelector((state) => state.pokemons)
  const pokemonPerPage = 12

  const [range, setRange] = useState({ first: 0, last: 12 })
  const [currentPage, setCurrentPage] = useState(1)
  const [currentPokemons, setCurrentPokemons] = useState(
    allPokemons?.slice(range.first, range.last)
  )

  const handleFilterByType = (e) => {
    dispatch(filterByType(e.target.value))
  }

  const handleFilterByUserCreated = (e) => {
    dispatch(filterByUserCreated(e.target.value))
  }

  const handleSortByName = (e) => {
    dispatch(orderByName(e.target.value))
  }

  const handleRefresh = (e) => {
    e.preventDefault()
    dispatch(getAllPokemons())
  }
  
  const pagination = (page) => {
    setCurrentPage(page)
  }

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

  return (
    <div className={style.container}>
      <header className={style.headerHome}>
        <div className={style.buttons}>
          <Link to='/create'>
            <button> Crear un Pokemón</button>
          </Link>
          <button
            onClick={(e) => {
              handleRefresh(e)
            }}>
            Recargar
          </button>
        </div>

        <Link to={'/'}>
          <img
            className={style.pokecenterIcon}
            src={Pokecenter}
            alt='pokecenter icon'
          />
        </Link>
        <section className={style.filters}>
          <select
            onChange={(e) => {
              handleSortByName(e)
            }}>
            <option value='none'>Orden</option>
            <option value='asc'>Ascendente</option>
            <option value='desc'>Descendente</option>
          </select>
          <select
            onChange={(e) => {
              handleFilterByUserCreated(e)
            }}>
            <option value='all'>Origen</option>
            <option value='api'>Originales</option>
            <option value='created'>Creados</option>
          </select>
          <select>
            <option value='none'>Orden ATK</option>
            <option value='all'>Ascendente</option>
            <option value='attack'>Descendente</option>
          </select>
          <select
            onChange={(e) => {
              handleFilterByType(e)
            }}>
            <option value='all'>Tipos</option>
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
            <option value='poison'>Poison</option>
            <option value='physic'>Psychic</option>
            <option value='rock'>Rock</option>
            <option value='shadow'>Shadow</option>
            <option value='steel'>Steel</option>
            <option value='water'>Water</option>
            <option value='unknown'>Unknown</option>
          </select>
        </section>
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
