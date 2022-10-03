const initialState = {
  pokemons: [],
  types: [],
  pokemonDetail: [],
  error: [],
}

const rootReducer = (state = initialState, action) => {
  const pokeState = state.pokemons

  switch (action.type) {
    case 'ERROR':
      return {
        ...state,
        error: action.payload,
      }
    case 'GET_POKEMONS':
      return {
        ...state,
        pokemons: action.payload,
      }
    case 'FILTER_BY_TYPE':
      const pokemonByType =
        action.payload === 'all'
          ? pokeState
          : pokeState.filter((e) => e.types?.includes(action.payload))
      return {
        ...state,
        pokemons: pokemonByType,
      }
    case 'FILTER_CREATED':
      const created =
        action.payload === 'created'
          ? pokeState.filter((e) => e.userCreated)
          : pokeState.filter((e) => !e.userCreated)

      console.log('reducers', created)
      return {
        ...state,
        pokemons: pokeState === 'all' ? state.pokemons : created,
      }
    default:
      return state
  }
}

export default rootReducer
