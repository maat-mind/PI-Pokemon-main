import React from 'react'
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
    <>
      <h1>{name}</h1>
      <img className={style.pokemonImage} src={img} alt={name} />
      <p>hp: {hp}</p>
      <p>attack: {attack}</p>
      <p>defense: {defense}</p>
      <p>weight: {weight}</p>
      <p>height: {height}</p>
      <p>speed: {speed}</p>
      <p>types: {types}</p>
    </>
  )
}

export default Card
