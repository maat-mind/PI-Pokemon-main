import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getTypes, postPokemon } from '../../redux/actions'
import style from './CreatePokemon.module.css'

const CreatePokemon = () => {
  const dispatch = useDispatch()
  const types = useSelector((state) => state.types)

  const [input, setInput] = useState({
    name: '',
    hp: 0,
    attack: 0,
    defense: 0,
    speed: 0,
    weight: 0,
    height: 0,
    types: [],
  })

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    })
  }

  const handleSelect = (e) => {
    setInput({
      ...input,
      types: [...input.types, e.target.value],
    })
  }

  const handleSubmit = (e) => {
    dispatch(postPokemon(input))
    alert('¡Creaste un Pokemón!')

    setInput({
      name: '',
      hp: 0,
      attack: 0,
      defense: 0,
      speed: 0,
      weight: 0,
      height: 0,
      types: [],
    })
  }

  useEffect(() => {
    dispatch(getTypes())
  }, [dispatch])

  return (
    <div className={style.container}>
      <span className={style.titleCreate}>
        <Link to='/home'>
          <button>◃</button>
        </Link>
        <h1 className={style.title}>Crea tu pokemón</h1>
      </span>
      <form className={style.formCreate}>
        <label for='name'>Nombre :</label>
        <input type='text' name='name' onChange={(e) => handleChange(e)} />

        <label for='attack'>Ataque :</label>
        <input type='number' name='attack' onChange={(e) => handleChange(e)} />

        <label for='defense'>Defensa :</label>
        <input type='number' name='defense' onChange={(e) => handleChange(e)} />

        <label for='hp'>Vida :</label>
        <input type='number' name='hp' onChange={(e) => handleChange(e)} />

        <label for='speed'>Velocidad :</label>
        <input type='number' name='speed' onChange={(e) => handleChange(e)} />

        <label for='weight'>Peso :</label>
        <input type='number' name='weight' onChange={(e) => handleChange(e)} />

        <label for='height'>Altura :</label>
        <input type='number' name='height' onChange={(e) => handleChange(e)} />

        <label for='img'>Imagen :</label>
        <input type='text' name='img' onChange={(e) => handleChange(e)} />

        <label for='types'>Tipo(s) :</label>

        <select className={style.select} onChange={(e) => handleSelect(e)}>
          {types.map((t) => (
            <option value={t.name}>{t.name}</option>
          ))}
        </select>

        <select className={style.select} onChange={(e) => handleSelect(e)}>
          <option>ninguno</option>
          {types.map((t) => (
            <option value={t.name}>{t.name}</option>
          ))}
        </select>
        <button
          className={style.submitCreate}
          type='submit'
          onClick={(e) => handleSubmit(e)}>
          Crear
        </button>
      </form>
    </div>
  )
}

export default CreatePokemon
