import { useState } from 'react'
import attackIcon from '../../assets/icons/attack.png'
import defenseIcon from '../../assets/icons/defense.png'
import heightIcon from '../../assets/icons/height.png'
import hpIcon from '../../assets/icons/hp.png'
import speedIcon from '../../assets/icons/speed.png'
import weightIcon from '../../assets/icons/weight.png'
import style from './Card.module.css'
import './Types.css'

const Card = ({
  name,
  img,
  hp,
  attack,
  defense,
  weight,
  height,
  speed,
  types,
}) => {
  const [isActive, setActive] = useState(false)

  return (
    <section className={style.pokemonCard}>
      <h1 className={style.pokemonName}>{name}</h1>
      <img className={style.pokemonImage} src={img} alt={name} />
      <button
        className={style.btnToggleActive}
        onClick={() => setActive(!isActive)}>
        info
      </button>
      <div className={isActive ? `${style.statsActive}` : `${style.stats}`}>
        <p>
          <img className={style.statIcon} src={hpIcon} alt='hp icon' />
          {hp}
        </p>
        <p>
          <img className={style.statIcon} src={attackIcon} alt='attack icon' />
          {attack}
        </p>
        <p>
          <img
            className={style.statIcon}
            src={defenseIcon}
            alt='defense icon'
          />
          {defense}
        </p>
        <p>
          <img className={style.statIcon} src={speedIcon} alt='speed icon' />
          {speed}
        </p>
        <p>
          <img className={style.statIcon} src={weightIcon} alt='weight icon' />
          {weight} hg
        </p>
        <p>
          <img className={style.statIcon} src={heightIcon} alt='height icon' />
          {height} dm
        </p>
      </div>
      <p>
        {types.map((e) => {
          return <span className={`${style.type} ${e}`}>{e}</span>
        })}
      </p>
    </section>
  )
}

export default Card
