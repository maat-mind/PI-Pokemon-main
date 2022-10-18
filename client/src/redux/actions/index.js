import axios from 'axios'

const URL = 'http://localhost:3001'

export const getAllPokemons = () => {
  return async (dispatch) => {
    try {
      let pokemons = await axios.get(`${URL}/pokemons`)

      return dispatch({
        type: 'GET_POKEMONS',
        payload: pokemons.data,
      })
    } catch (error) {
      return dispatch({
        type: 'ERROR',
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
      let pokemon = await axios.get(`${URL}/pokemons?name=${name}`)

      return dispatch({
        type: 'GET_BY_NAME',
        payload: pokemon.data,
      })
    } catch (error) {
      return dispatch({
        type: 'ERROR',
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
      let types = await axios.get(`${URL}/types`)

      return dispatch({
        type: 'GET_TYPES',
        payload: types.data,
      })
    } catch (error) {
      return dispatch({
        type: 'ERROR',
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
      let newPokemon = await axios.post(`${URL}/pokemons`, payload)
      return dispatch({
        type: 'POST_POKEMON',
        payload: newPokemon,
      })
    } catch (error) {
      return dispatch({
        type: 'ERROR',
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
      let pokemon = await axios.get(`${URL}/pokemons/${id}`)
      return dispatch({
        type: 'GET_DETAIL',
        payload: pokemon.data[0],
      })
    } catch (error) {
      return dispatch({
        type: 'ERROR',
        payload: {
          message: error.message,
        },
      })
    }
  }
}

export const filterByType = (payload) => {
  return {
    type: 'FILTER_BY_TYPE',
    payload,
  }
}

export const filterByUserCreated = (payload) => {
  console.log('action: ', payload)
  return {
    type: 'FILTER_CREATED',
    payload,
  }
}

export const orderByAttack = (payload) => {
  return {
    type: 'ORDER_BY_ATTACK',
    payload,
  }
}

export const orderByName = (payload) => {
  return {
    type: 'ORDER_BY_NAME',
    payload,
  }
}

/* export const cleanDetail = (dispatch) => {
  return dispatch({
    type: 'CLEAN_DETAIL',
    payload: [],
  })
}

export const cleanPokemons = (dispatch) => {
  return dispatch({
    type: 'CLEAN_POKEMONS',
    payload: [],
  })
}
 */
