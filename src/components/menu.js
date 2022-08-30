import React from 'react'
import '../style.css'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Button from '@mui/material/Button'
import HomeIcon from '@mui/icons-material/Home'
import FavoriteIcon from '@mui/icons-material/Favorite'

function Menu(props) {
  const favoriteCountries = useSelector((state) => state.favoriteCountries)
  const count = favoriteCountries.length

  return (
    <div className="active">
      <header className="header">
        <NavLink to={'/'}>
          <Button variant="contained" startIcon={<HomeIcon />}>
            Home
          </Button>
        </NavLink>
        <NavLink to={'/country/favorites'}>
          <Button variant="contained" startIcon={<FavoriteIcon />}>
            Favorites <i className="favCount"> {count}</i>
          </Button>
        </NavLink>
      </header>
    </div>
  )
}

export default Menu
