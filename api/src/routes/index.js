const axios = require('axios')
const { Router } = require('express')
const { Pokemon, Type } = require('../db.js')
const { getAllPokemons } = require('../controllers')

const router = Router()

router.get('/pokemons', async (req, res) => {
  try {
    const pokemons = await Pokemon.findAll()
    res.json(pokemons)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
})

router.post('/pokemons', async (req, res) => {
  const {
    types,
    name,
    hp,
    attack,
    defense,
    speed,
    height,
    weight,
    userCreated,
  } = req.body

  try {
    const newPokemon = await Pokemon.create({
      name,
      hp,
      attack,
      defense,
      speed,
      height,
      weight,
      userCreated,
    })

    types.forEach(async (e) => {
      let pokemonType = await Type.findAll({
        where: { name: e },
      })
      await newPokemon.addType(pokemonType)
    })

    res.send('Created Successfully')
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
})

router.get('/types', async (req, res) => {
  try {
    const api = await axios.get('https://pokeapi.co/api/v2/type')
    const apiTypes = api.data.results.map((e) => e.name)

    apiTypes.forEach((e) => {
      Type.findOrCreate({
        where: { name: e },
      })
    })

    const pokemonTypes = await Type.findAll()
    res.send(pokemonTypes)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
})

module.exports = router
