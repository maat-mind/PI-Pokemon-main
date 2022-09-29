import React from 'react'
import attackIcon from '../../assets/icons/attack.png'
import defenseIcon from '../../assets/icons/defense.png'
import heightIcon from '../../assets/icons/height.png'
import hpIcon from '../../assets/icons/hp.png'
import speedIcon from '../../assets/icons/speed.png'
import weightIcon from '../../assets/icons/weight.png'
import style from './Card.module.css'

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
  return (
    <section className={style.pokemonCard}>
      <h1>{name}</h1>
      <img className={style.pokemonImage} src={img} alt={name} />
      <div className={style.stats}>
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
          <img className={style.statIcon} src={weightIcon} alt='weight icon' />
          {weight}
        </p>
        <p>
          <img className={style.statIcon} src={heightIcon} alt='height icon' />
          {height}
        </p>
        <p>
          <img className={style.statIcon} src={speedIcon} alt='speed icon' />
          {speed}
        </p>
      </div>
      {/* <p>{types.map((e) => ` ${e} `)}</p> */}
    </section>
  )
}

export default Card
