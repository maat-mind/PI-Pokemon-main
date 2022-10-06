import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
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

  useEffect(() => {
    dispatch(getTypes())
  }, [dispatch])

  return (
    <div className={style.container}>
      <span className={style.titleCreate}>
        <Link to='/home'>
          <button>◃</button>
        </Link>
        <h1>Crea tu pokemón</h1>
      </span>
      <form className={style.formCreate}>
        <label
          className={style.labelCreate}
          type='text'
          value={input.name}
          name='name'
          for='name'>
          Nombre :
        </label>
        <input id={input.name} />
        <label
          className={style.labelCreate}
          type='number'
          value={input.attack}
          name='attack'
          for='attack'>
          Ataque :
        </label>
        <input id={input.attack} />

        <label
          className={style.labelCreate}
          type='number'
          value={input.defense}
          name='defense'
          for='defense'>
          Defensa :
        </label>
        <input id={input.defense} />

        <label
          className={style.labelCreate}
          type='number'
          value={input.hp}
          name='hp'
          for='hp'>
          Vida :
        </label>
        <input id={input.hp} />

        <label
          className={style.labelCreate}
          type='number'
          value={input.speed}
          name='speed'
          for='speed'>
          Velocidad :
        </label>
        <input id={input.speed} />

        <label
          className={style.labelCreate}
          type='number'
          value={input.weight}
          name='weight'
          for='weight'>
          Peso :
        </label>
        <input id={input.weight} />

        <label
          className={style.labelCreate}
          type='number'
          value={input.height}
          name='height'
          for='height'>
          Altura :
        </label>
        <input id={input.height} />

        <label
          className={style.labelCreate}
          type='number'
          value={input.name}
          name='name'
          for='types'>
          Tipos :
        </label>
        <input id={input.types} />

        <button className={style.submitCreate} type='submit'>
          Crear
        </button>
      </form>
    </div>
  )
}

export default CreatePokemon
