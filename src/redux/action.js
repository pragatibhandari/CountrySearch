export const REMOVE_FAVORITE = 'REMOVE_FAVORITE'
export const ADD_FAVORITE = 'ADD_FAVORITE'
export const CLEAR_FAVORITE = 'CLEAR_FAVORITE'

export const removeFavorite = (countryName) => {
  return {
    type: REMOVE_FAVORITE,
    payload: countryName,
  }
}
export const addFavorite = (countryName) => {
  return {
    type: ADD_FAVORITE,
    payload: countryName,
  }
}
export const clearFavorite = () => {
  return {
    type: CLEAR_FAVORITE,
  }
}
