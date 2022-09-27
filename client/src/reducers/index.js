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
  POST_POKEMON,
} from '../actions/types'

const initialState = {
  pokemons: [],
  allPokemons: [],
  types: [],
  pokemonDetail: [],
  error: [],
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ERROR:
      return {
        ...state,
        error: action.payload,
      }
    case GET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
      }
    case FILTER_BY_TYPE:
      const pokemons = state.allPokemons
      const pokemonByType =
        action.payload === 'All'
          ? pokemons
          : pokemons.filter(
              (e) =>
                e.types.find((e) => e === action.payload) === action.payload
            )

      return {
        ...state,
        pokemons: pokemonByType,
      }
    case FILTER_CREATED:
      const pokemones = state.allPokemons
      const pokemonFCreated =
        action.payload === 'created'
          ? pokemones.filter((e) => e.createAtDB)
          : pokemones.filter((e) => !e.createAtDB)
      return {
        ...state,
        pokemons: action.payload === 'All' ? pokemones : pokemonFCreated,
      }

    case ORDER_BY_ATTACK:
      let sortPokemons =
        action.payload === 'Asc'
          ? state.pokemons.sort(function (a, b) {
              if (a.attack > b.attack) {
                return 1
              }
              if (b.attack > a.attack) {
                return -1
              }
              return 0
            })
          : state.pokemons.sort(function (a, b) {
              if (a.attack > b.attack) {
                return -1
              }
              if (b.attack > a.attack) {
                return 1
              }
              return 0
            })
      return {
        ...state,
        pokemons: sortPokemons,
      }
    case ORDER_BY_NAME:
      let sortName =
        action.payload === 'A-Z'
          ? state.pokemons.sort(function (a, b) {
              if (a.name > b.name) {
                return 1
              }
              if (b.name > a.name) {
                return -1
              }
              return 0
            })
          : state.pokemons.sort(function (a, b) {
              if (a.name > b.name) {
                return -1
              }
              if (b.name > a.name) {
                return 1
              }
              return 0
            })
      return {
        ...state,
        pokemons: sortName,
      }
    case GET_BY_NAME:
      return {
        ...state,
        pokemons: action.payload,
      }
    case GET_TYPES:
      return {
        ...state,
        types: action.payload,
      }
    case POST_POKEMON:
      return {
        ...state,
      }
    case GET_DETAIL:
      return {
        ...state,
        pokemonDetail: action.payload,
      }
    default:
      return state
  }
}

export default rootReducer
