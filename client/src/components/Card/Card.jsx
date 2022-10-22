import {Link} from 'react-router-dom'
import style from './Card.module.css'
import './Types.css'

const Card = ({id, name, img, types}) => {
  return (
    <section className={style.pokemonCard}>
      <Link to={`/home/${id}`}>
        <h1 className={style.pokemonName}>{name}</h1>
        <img className={style.pokemonImage} src={img} alt={name}/>
        <p>
          {types.map((e) => {
            return <span className={`${'type'} ${e}`}>{e}</span>
          })}
        </p>
      </Link>
    </section>
  )
}

export default Card
