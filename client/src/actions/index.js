import axios from 'axios'
import {
  ERROR,
  FILTER_BY_TYPE,
  FILTER_CREATED,
  GET_BY_NAME,
  GET_DETAIL,
  GET_POKEMONS,
  GET_TYPES,
  ORDER_BY_ATTACK,
  ORDER_BY_NAME,
} from './types.js'

export const getAllPokemons = () => {
  return async (dispatch) => {
    try {
      let pokemons = await axios.get('/pokemons', {})

      return dispatch({
        type: GET_POKEMONS,
        payload: pokemons.data,
      })
    } catch (error) {
      return dispatch({
        type: ERROR,
        payload: {
          message: error.message,
        },
      })
    }
  }
}

export const getByName = (name) => {
  return async (dispatch) => {
    try {
      let pokemon = await axios.get(`/pokemons?name=${name}`)

      return dispatch({
        type: GET_BY_NAME,
        payload: pokemon.data,
      })
    } catch (error) {
      return dispatch({
        type: ERROR,
        payload: {
          message: error.message,
        },
      })
    }
  }
}

export const getTypes = () => {
  return async (dispatch) => {
    try {
      let types = await axios.get('/types')

      return dispatch({
        type: GET_TYPES,
        payload: types.data,
      })
    } catch (error) {
      return dispatch({
        type: ERROR,
        payload: {
          message: error.message,
        },
      })
    }
  }
}

export const postPokemon = (payload) => {
  return async (dispatch) => {
    try {
      let newPokemon = await axios.post('/pokemons', payload)
      return newPokemon
    } catch (error) {
      return dispatch({
        type: ERROR,
        payload: {
          message: error.message,
        },
      })
    }
  }
}

export const getDetail = (id) => {
  return async (dispatch) => {
    try {
      let pokemon = await axios.get(`/pokemons/${id}`)
      return dispatch({
        type: GET_DETAIL,
        payload: pokemon.data,
      })
    } catch (error) {
      return dispatch({
        type: ERROR,
        payload: {
          message: error.message,
        },
      })
    }
  }
}

export const filterByName = (payload) => {
  return {
    type: FILTER_BY_TYPE,
    payload,
  }
}

export const filterByUserCreated = (payload) => {
  return {
    type: FILTER_CREATED,
    payload,
  }
}

export const orderByAttack = (payload) => {
  return {
    type: ORDER_BY_ATTACK,
    payload,
  }
}

export const orderByName = (payload) => {
  return {
    type: ORDER_BY_NAME,
    payload,
  }
}
