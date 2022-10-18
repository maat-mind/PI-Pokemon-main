import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getDetail } from '../../redux/actions'
// import style from './DetailPokemon.module.css'

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

      <h1>{p.name}</h1>
      <img src={p.img} alt={p.name} />
      <p> {p.hp}</p>
      <p> {p.attack}</p>
      <p> {p.defense}</p>
      <p> {p.weight}</p>
      <p> {p.height}</p>
      <p> {p.speed}</p>
      <p> {p.types}</p>
    </>
  )
}

export default DetailPokemon
