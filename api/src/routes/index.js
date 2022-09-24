const { Router } = require('express')
//const { Pokemon } = require('../models/Pokemon.js')
const { Pokemon, Type } = require('../db.js')

const router = Router()

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

// router.get()

module.exports = router
