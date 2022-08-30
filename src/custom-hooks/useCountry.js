// This hook is used to fetch one specific country

import { useState, useEffect } from 'react'

const useCountry = (name) => {
  const [country, setCountries] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${name}?fullText=true`,
        )
        const data = await response.json()
        setCountries(data[0])
      } catch (error) {
        setError(error)
      }
    }
    fetchCountries()
  }, [name])
  return [country, error]
}

export default useCountry
