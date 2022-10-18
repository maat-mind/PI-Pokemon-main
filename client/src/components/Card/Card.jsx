import style from './Card.module.css'
import './Types.css'

const Card = ({ name, img, types }) => {
  return (
    <section className={style.pokemonCard}>
      <h1 className={style.pokemonName}>{name}</h1>
      <img className={style.pokemonImage} src={img} alt={name} />
      <p>
        {types.map((e) => {
          return <span className={`${style.type} ${e}`}>{e}</span>
        })}
      </p>
    </section>
  )
}

export default Card
