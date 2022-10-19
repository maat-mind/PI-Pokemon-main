import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getDetail } from '../../redux/actions'

import attackIcon from '../../assets/icons/attack.png'
import defenseIcon from '../../assets/icons/defense.png'
import heightIcon from '../../assets/icons/height.png'
import hpIcon from '../../assets/icons/hp.png'
import speedIcon from '../../assets/icons/speed.png'
import weightIcon from '../../assets/icons/weight.png'
import loading from '../../assets/img/loading.gif'

import style from './DetailPokemon.module.css'

const DetailPokemon = () => {
  const { id } = useParams()

  const dispatch = useDispatch()
  const pokemon = useSelector((state) => state.pokemonDetail)

  useEffect(() => {
    dispatch(getDetail(id))
  }, [id, dispatch])

  if (Array.isArray(pokemon)) {
    return (
      <>
        <p>Estoy cargando...</p>
        <img src={loading} alt='loading gif' />
      </>
    )
  } else {
    return (
      <>
        <Link to='/home'>
          <button>◃</button>
        </Link>

        <h1 className={style.pokemonName}>{pokemon.name}</h1>
        <img
          className={style.pokemonImage}
          src={pokemon.img}
          alt={pokemon.name}
        />
        <p>
          <img className={style.statIcon} src={hpIcon} alt='hp icon' />
          {pokemon.hp}
        </p>
        <p>
          <img className={style.statIcon} src={attackIcon} alt='attack icon' />
          {pokemon.attack}
        </p>
        <p>
          <img
            className={style.statIcon}
            src={defenseIcon}
            alt='defense icon'
          />
          {pokemon.defense}
        </p>
        <p>
          <img className={style.statIcon} src={speedIcon} alt='speed icon' />
          {pokemon.speed}
        </p>
        <p>
          <img className={style.statIcon} src={weightIcon} alt='weight icon' />
          {pokemon.weight} hg
        </p>
        <p>
          <img className={style.statIcon} src={heightIcon} alt='height icon' />
          {pokemon.height} dm
        </p>
      </>
    )
  }
}

export default DetailPokemon
