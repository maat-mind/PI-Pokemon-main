import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getTypes, postPokemon } from '../../redux/actions'
import style from './CreatePokemon.module.css'

const CreatePokemon = () => {
  const dispatch = useDispatch()
  const types = useSelector((state) => state.types)

  const [errors, setErrors] = useState({
    name: '',
    attack: '',
    defense: '',
    hp: '',
    speed: '',
    weight: '',
    height: '',
  })
  const [input, setInput] = useState({
    name: '',
    attack: 0,
    defense: 0,
    hp: 0,
    speed: 0,
    weight: 0,
    height: 0,
    types: [],
  })

  const regNum = (n) => /^[0-9]{0,3}$/.test(n)

  const regStr = (n) => /^[a-zA-Z]{0,20}$/.test(n)

  const validate = (e) => {
    for (const key in errors) {
      regNum(e[key])
        ? (errors[key] = '')
        : (errors[key] = 'Solo números (entre 0 y 999)')
    }
    regStr(e.name) ? (errors.name = '') : (errors.name = 'Solo letras')

    return errors
  }

  const handleChange = (e) => {
    setErrors(validate(input))

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
    e.preventDefault()
    const { name, hp, attack, defense, speed, height, weight } = input

    if (name && hp && attack && defense && speed && height && weight) {
      dispatch(postPokemon(input))
      alert('¡Creaste un nuevo Pokemon!')
    } else {
      console.log(input)
      alert('Te faltan llenar campos')
    }
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
        {errors.name && <p className={style.error}>{errors.name}</p>}

        <label for='attack'>Ataque :</label>
        <input type='number' name='attack' onChange={(e) => handleChange(e)} />
        {errors.attack && <p className={style.error}>{errors.attack}</p>}

        <label for='defense'>Defensa :</label>
        <input type='number' name='defense' onChange={(e) => handleChange(e)} />
        {errors.defense && <p className={style.error}>{errors.defense}</p>}

        <label for='hp'>Vida :</label>
        <input type='number' name='hp' onChange={(e) => handleChange(e)} />
        {errors.hp && <p className={style.error}>{errors.hp}</p>}

        <label for='speed'>Velocidad :</label>
        <input type='number' name='speed' onChange={(e) => handleChange(e)} />
        {errors.speed && <p className={style.error}>{errors.speed}</p>}

        <label for='weight'>Peso :</label>
        <input type='number' name='weight' onChange={(e) => handleChange(e)} />
        {errors.weight && <p className={style.error}>{errors.weight}</p>}

        <label for='height'>Altura :</label>
        <input type='number' name='height' onChange={(e) => handleChange(e)} />
        {errors.height && <p className={style.error}>{errors.height}</p>}

        <label for='img'>Imagen :</label>
        <input type='text' name='img' onChange={(e) => handleChange(e)} />

        <label for='types'>Tipo(s) :</label>

        <select className={style.select} onChange={(e) => handleSelect(e)}>
          <option>ninguno</option>
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
