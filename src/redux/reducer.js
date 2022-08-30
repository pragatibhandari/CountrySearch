import { ADD_FAVORITE, REMOVE_FAVORITE, CLEAR_FAVORITE } from './action'

const initialState = {
  favoriteCountries: [],
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      const countryName = action.payload
      const isInList = state.favoriteCountries.some(
        (name) => name === countryName,
      )
      if (isInList) {
        return state
      }
      return {
        ...state,
        favoriteCountries: [...state.favoriteCountries, countryName],
      }
    case REMOVE_FAVORITE:
      const removeCountryName = action.payload
      const newList = state.favoriteCountries.filter(
        (name) => name !== removeCountryName,
      )
      return {
        ...state,
        favoriteCountries: newList,
      }
    case CLEAR_FAVORITE:
      return {
        ...state,
        favoriteCountries: [],
      }

    default:
      return state
  }
}
export default reducer
