const axios = require('axios')
const { Pokemon, Type } = require('../db')

const getApiInfo = async () => {
  const apiUrl = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=60')
  const apiInfo = await apiUrl.data.results.map(async (e) => {
    const pokemonUrl = await axios.get(e.url)

    return {
      id: pokemonUrl.data.id,
      name: pokemonUrl.data.name,
      img: pokemonUrl.data.sprites.other.home.front_default,
      types: pokemonUrl.data.types.map((e) => e.type.name),
      hp: pokemonUrl.data.stats[0].base_stat,
      attack: pokemonUrl.data.stats[1].base_stat,
      defense: pokemonUrl.data.stats[2].base_stat,
      speed: pokemonUrl.data.stats[5].base_stat,
      weight: pokemonUrl.data.weight,
      height: pokemonUrl.data.height,
    }
  })

  const promises = await Promise.all(apiInfo)
  return promises
}

const getDbInfo = async () => {
  const db = await Pokemon.findAll({
    include: {
      model: Type,
      attributes: ['name'],
    },
  })

  return db.map((e) => {
    return {
      id: e.id,
      name: e.name,
      img: e.img,
      types: e.types.map((e) => e.name),
      hp: e.hp,
      attack: e.attack,
      defense: e.defense,
      speed: e.speed,
      weight: e.weight,
      height: e.height,
      userCreated: e.userCreated,
    }
  })
}

const getAllPokemons = async () => {
  const api = await getApiInfo()
  const db = await getDbInfo()

  const data = api.concat(db)

  return data
}

module.exports = {
  getAllPokemons,
}
