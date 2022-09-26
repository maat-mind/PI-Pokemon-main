const { Router } = require('express')
const { Pokemon, Type } = require('../db.js')
const axios = require('axios')

const router = Router()

const getApiInfo = async () => {
  const apiUrl = await axios.get('https://pokeapi.co/api/v2/pokemon')
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

  const promise = await Promise.all(apiInfo)
  return promise
}

router.get('/pokemons', async (req, res) => {
  try {
    const pokemons = await Pokemon.findAll()
    res.json(pokemons)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
})

router.put('/pokemons', async (req, res) => {
  const { name, health, attack, defense, speed, height, weight, userCreated } =
    req.body

  try {
    const newPokemon = await Pokemon.create({
      name,
      health,
      attack,
      defense,
      speed,
      height,
      weight,
      userCreated,
    })

    res.json(newPokemon)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
})

router.get('/types', async (req, res) => {
  try {
    const types = await Type.findAll()
    res.json(types)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
})

// router.get('pokemons/:id', async (req, res) => {})

// router.get('pokemons/:name', async (req, res) => {})

module.exports = router
