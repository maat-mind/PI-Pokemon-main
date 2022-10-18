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

import style from './DetailPokemon.module.css'

const DetailPokemon = () => {
  const { id } = useParams()

  const dispatch = useDispatch()
  const p = useSelector((state) => {
    return state.pokemonDetail
  })

  useEffect(() => {
    dispatch(getDetail(id))
  })

  return (
    <>
      <Link to='/home'>
        <button>◃</button>
      </Link>

      <h1 className={style.pokemonName}>{p.name}</h1>
      <img className={style.pokemonImage} src={p.img} alt={p.name} />
      <p>
        <img className={style.statIcon} src={hpIcon} alt='hp icon' />
        {p.hp}
      </p>
      <p>
        <img className={style.statIcon} src={attackIcon} alt='attack icon' />
        {p.attack}
      </p>
      <p>
        <img className={style.statIcon} src={defenseIcon} alt='defense icon' />
        {p.defense}
      </p>
      <p>
        <img className={style.statIcon} src={speedIcon} alt='speed icon' />
        {p.speed}
      </p>
      <p>
        <img className={style.statIcon} src={weightIcon} alt='weight icon' />
        {p.weight} hg
      </p>
      <p>
        <img className={style.statIcon} src={heightIcon} alt='height icon' />
        {p.height} dm
      </p>
      <p>
        {p.types.map((e) => {
          return <span className={`${style.type} ${e}`}>{e}</span>
        })}
      </p>
    </>
  )
}

export default DetailPokemon
