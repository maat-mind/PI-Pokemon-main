import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link, useParams} from 'react-router-dom'
import {getDetail} from '../../redux/actions'

import attackIcon from '../../assets/icons/attack.png'
import defenseIcon from '../../assets/icons/defense.png'
import heightIcon from '../../assets/icons/height.png'
import hpIcon from '../../assets/icons/hp.png'
import speedIcon from '../../assets/icons/speed.png'
import weightIcon from '../../assets/icons/weight.png'
import loading from '../../assets/img/loading.gif'

import style from './DetailPokemon.module.css'

const DetailPokemon = () => {
  const {id} = useParams()

  const dispatch = useDispatch()
  const pokemon = useSelector((state) => state.pokemonDetail)

  useEffect(() => {
    dispatch(getDetail(id))
  }, [id, dispatch])

  if (Array.isArray(pokemon) || pokemon.id != id) {
    return (
      <main className={style.mainDetail}>
        <img src={loading} alt="loading gif"/>
      </main>
    )
  } else {
    return (
      <main className={style.mainDetail}>
        <div className={style.cardDetail}>

          <header className={style.headerDetail}>
            <Link to="/home">
              <button className={style.btnReturn}>◃</button>
            </Link>
            <h1 className={style.pokemonName}>{pokemon.name}</h1>
          </header>

          <img
            className={style.pokemonImage}
            src={pokemon.img}
            alt={pokemon.name}
          />
          <div className={style.cardStats}>

            <p className={style.textStat}>
              <img className={style.statIcon} src={hpIcon} alt="hp icon"/>
              {pokemon.hp}
            </p>
            <p className={style.textStat}>
              <img className={style.statIcon} src={attackIcon} alt="attack icon"/>
              {pokemon.attack}
            </p>
            <p className={style.textStat}>
              <img
                className={style.statIcon}
                src={defenseIcon}
                alt="defense icon"
              />
              {pokemon.defense}
            </p>
            <p className={style.textStat}>
              <img className={style.statIcon} src={speedIcon} alt="speed icon"/>
              {pokemon.speed}
            </p>
            <p className={style.textStat}>
              <img className={style.statIcon} src={weightIcon} alt="weight icon"/>
              {pokemon.weight} hg
            </p>
            <p className={style.textStat}>
              <img className={style.statIcon} src={heightIcon} alt="height icon"/>
              {pokemon.height} dm
            </p>
          </div>
        </div>

      </main>
    )
  }
}

export default DetailPokemon
