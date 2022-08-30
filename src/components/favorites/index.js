import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import './favStyle.css'
import DeleteIcon from '@mui/icons-material/Delete'
import Button from '@mui/material/Button'
import HomeIcon from '@mui/icons-material/Home'
import { removeFavorite, clearFavorite } from '../../redux/action'

function Favorites() {
  const favoriteCountries = useSelector((state) => state.favoriteCountries)
  const dispatch = useDispatch()
  const removeFromFavorite = (countryName) => {
    dispatch(removeFavorite(countryName))
  }
  const removeAll = () => {
    dispatch(clearFavorite())
  }
  const linkStyle = {
    color: 'blue',
    fontWeight: 'bold',
    textDecoration: 'none',
  }
  const tableCellStyle = {
    fontSize: '20px',
    fontFamily: 'Trebuchet MS',
  }

  return (
    <div className="favContainer">
      <h1>Favorite Countries</h1>
      {favoriteCountries.map((country, index) => (
        <ul key={index} className="listStyle">
          <li style={tableCellStyle}>
            <Link to={`/country/${country}`} style={linkStyle}>
              {country}
            </Link>
          </li>
          <li>
            <Button
              variant="outlined"
              style={{ color: '#A52A2A' }}
              onClick={() => removeFromFavorite(country)}
              startIcon={<DeleteIcon />}
            >
              Delete
            </Button>
          </li>
        </ul>
      ))}
      <div className="btn1">
        <Link to="/">
          <Button
            variant="contained"
            style={{ color: 'white', background: '#A52A2A' }}
            startIcon={<HomeIcon />}
            onClick={() => {
              ;<Link />
            }}
          >
            Go back
          </Button>
        </Link>
        <Button
          variant="contained"
          onClick={() => {
            removeAll()
          }}
          startIcon={<DeleteIcon />}
        >
          Remove All
        </Button>
      </div>
    </div>
  )
}

export default Favorites
