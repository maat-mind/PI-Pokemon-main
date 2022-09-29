import React from 'react'

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
      <img src={img} alt={name} />
      <p>{hp}</p>
      <p>{attack}</p>
      <p>{defense}</p>
      <p>{weight}</p>
      <p>{height}</p>
      <p>{speed}</p>
      <p>{types}</p>
    </>
  )
}

export default Card
