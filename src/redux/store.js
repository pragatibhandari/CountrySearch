import { createStore } from 'redux'
import reducer from './reducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const initialState = {
  favoriteCountries: [],
}

const storefactory = () => {
  const favoriteList = localStorage.getItem('countries')
  if (favoriteList) {
    initialState.favoriteCountries = JSON.parse(favoriteList)
  }

  const store = createStore(reducer, initialState, composeWithDevTools())

  store.subscribe(() => {
    const currentState = store.getState()
    const favoriteList = currentState.favoriteCountries
    localStorage.setItem('countries', JSON.stringify(favoriteList))
    console.log('subscribe', currentState)
  })

  return store
}

export default storefactory
