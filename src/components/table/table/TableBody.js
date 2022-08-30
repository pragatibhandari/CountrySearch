import MuiTableBody from '@mui/material/TableBody'
import { TableRow, TableCell } from '@mui/material'
import React from 'react'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addFavorite } from '../../../redux/action'
import { removeFavorite } from '../../../redux/action'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { useSelector } from 'react-redux'
import FavoriteIcon from '@mui/icons-material/Favorite'
import '../../../style.css'
import './style.css'

function TableBody({
  countries,
  searchTerm,
  order,
  orderBy,
  stableSort,
  getComparator,
}) {
  const favoriteCountries = useSelector((state) => state.favoriteCountries)
  const dispatch = useDispatch()
  const Togglefavorite = (countryName) => {
    if (favoriteCountries.includes(countryName)) {
      dispatch(removeFavorite(countryName))
    } else {
      dispatch(addFavorite(countryName))
    }
  }

  return (
    <MuiTableBody>
      {stableSort(countries, getComparator(order, orderBy))
        .filter((country) => {
          if (searchTerm.length === '') {
            return country
          } else if (
            country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return country
          } else if (
            country.name.common
              .toLowerCase()
              .includes(!searchTerm.toLowerCase())
          ) {
            return <p>country not found</p>
          }
        })
        .map((country, index) => {
          return (
            <TableRow key={index}>
              <TableCell key={country.id}>
                <Link
                  to={`/country/${country.name.common}`}
                  className="flagStyle"
                >
                  <img
                    src={country.flags.png}
                    alt="flag"
                    style={{ height: '30px', width: '50px' }}
                  ></img>
                </Link>
              </TableCell>
              <TableCell key={country.cca2}>
                <Link
                  to={`/country/${country.name.common}`}
                  style={{ color: 'blue' }}
                >
                  {country.name.common}
                </Link>
              </TableCell>
              <TableCell key={country.capital}>
                {country.capital
                  ? country.capital.map((capitalName) => (
                      <span key={capitalName}> {capitalName} </span>
                    ))
                  : 'N/A'}
              </TableCell>
              <TableCell key="uniqueId11">{country.region}</TableCell>
              <TableCell key={country.population}>
                {country.population.toLocaleString()}
              </TableCell>
              <TableCell key="uniqueId13">
                {country.languages
                  ? Object.values(country.languages).map((value) => (
                      <p className="languages" key={value}>
                        {value}
                      </p>
                    ))
                  : 'N/A'}
              </TableCell>
              <TableCell>
                <Button onClick={() => Togglefavorite(country.name.common)}>
                  {favoriteCountries.includes(country.name.common) ? (
                    <FavoriteIcon style={{ fill: 'red' }} />
                  ) : (
                    <FavoriteBorderIcon color="disabled" />
                  )}
                </Button>
              </TableCell>
            </TableRow>
          )
        })}
    </MuiTableBody>
  )
}
export default TableBody
