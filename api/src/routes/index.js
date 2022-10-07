const axios = require('axios')
const { Router } = require('express')
const { Pokemon, Type } = require('../db.js')
const { getAllPokemons } = require('../controllers')

const router = Router()

router.get('/pokemons/:id', async (req, res) => {
  const id = req.params.id

  try {
    const pokemons = await getAllPokemons()

    let name = pokemons.filter((e) => {
      return e.id == id
    })

    res.json(name)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
})

router.get('/pokemons', async (req, res) => {
  const pokemon = req.query.name

  try {
    let pokemons = await getAllPokemons()

    if (pokemon) {
      let name = pokemons.filter((e) => {
        return e.name.toLowerCase() === pokemon.toLowerCase()
      })

      return res.json(name)
    }

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
    img,
  } = req.body

  try {
    if (
      !name ||
      !hp ||
      !attack ||
      !defense ||
      !speed ||
      !height ||
      !weight ||
      !img ||
      !types
    )
      return res.status(400).json({ message: 'falta información' })

    const findPokemon = await Pokemon.findOne({ where: { name } })

    if (findPokemon) return res.status(400).json({ message: 'nombre en uso' })

    const newPokemon = await Pokemon.create({
      name,
      hp,
      attack,
      defense,
      speed,
      height,
      weight,
      img,
      userCreated,
    })

    types.forEach(async (e) => {
      let pokemonType = await Type.findAll({
        where: { name: e },
      })
      await newPokemon.addType(pokemonType)
    })

    res.json(newPokemon)
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
