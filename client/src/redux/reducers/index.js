const initialState = {
  pokemons: [],
  types: [],
  pokemonDetail: [],
  error: [],
}

const rootReducer = (state = initialState, action) => {
  const pokeState = state.pokemons

  // Sort functions comparing first element(a) with second element(b)
  const sortAscByName = (a, b) =>
    a.name > b.name ? 1 : a.name < b.name ? -1 : 0

  const sortDescByName = (a, b) =>
    a.name > b.name ? -1 : a.name < b.name ? 1 : 0

  const sortAscByAttack = (a, b) =>
    a.attack > b.attack ? 1 : a.attack < b.attack ? -1 : 0

  const sortDescByAttack = (a, b) =>
    a.attack > b.attack ? -1 : a.attack < b.attack ? 1 : 0

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
    case 'GET_TYPES':
      return {
        ...state,
        types: action.payload,
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
    case 'ORDER_BY_NAME':
      const sortedArray =
        action.payload === 'asc'
          ? pokeState.sort(sortAscByName)
          : pokeState.sort(sortDescByName)
      return {
        ...state,
        sortedArray,
      }
    case 'ORDER_BY_ATTACK':
      const sortedByAttack =
        action.payload === 'asc'
          ? pokeState.sort(sortAscByAttack)
          : pokeState.sort(sortDescByAttack)
      return {
        ...state,
        sortedByAttack,
      }
    case 'GET_BY_NAME':
      return {
        ...state,
        pokemons: action.payload,
      }
    case 'POST_POKEMON':
      return {
        ...state,
      }
    case 'GET_DETAIL':
      return {
        ...state,
        pokemonDetail: action.payload,
      }
    default:
      return state
  }
}

export default rootReducer
