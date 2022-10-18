import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getDetail } from '../../redux/actions'
// import style from './DetailPokemon.module.css'

const DetailPokemon = () => {
  const { id } = useParams()

  const dispatch = useDispatch()
  const pokemon = useSelector((state) => state.pokemonDetail)

  useEffect(() => {
    dispatch(getDetail(id))
  }, [dispatch, id])

  console.log(pokemon)
  return (
    <>
      <Link to='/home'>
        <button>◃</button>
      </Link>

      <h1>{pokemon[0].name}</h1>
      <img src={pokemon[0].img} alt={pokemon[0].name} />
      <p> {pokemon[0].hp}</p>
      <p> {pokemon[0].attack}</p>
      <p> {pokemon[0].defense}</p>
      <p> {pokemon[0].weight}</p>
      <p> {pokemon[0].height}</p>
      <p> {pokemon[0].speed}</p>
      <p> {pokemon[0].types}</p>
    </>
  )
}

export default DetailPokemon
