import './style.css'
import useCountries from './custom-hooks/useCountries'
import CountryTable from './components/table/table/index'
import { Routes, Route } from 'react-router-dom'
import CountryPage from './components/table/country'
import Favorites from './components/favorites'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import WbSunnyIcon from '@mui/icons-material/WbSunny'
import NightlightRoundIcon from '@mui/icons-material/NightlightRound'

function App() {
  const [countries] = useCountries()
  const [darkMode, setDarkMode] = useState(false)
  const favoriteCountries = useSelector((state) => state.favoriteCountries)

  return (
    <div className="App">
      <div className={darkMode ? 'dark-mode' : 'light-mode'}>
        <div key="uniqueId1" className="container">
          <h1 className="h1">COUNTRY SEARCH</h1>
          <div key="uniqueId2" className="toggle">
            <span
              style={{
                color: darkMode ? 'var(--lightMode)' : 'var(--disable)',
              }}
            >
              {<WbSunnyIcon />}
            </span>
            <div key="uniqueId3" className="switch-checkbox">
              <label className="switch">
                <input
                  type="checkbox"
                  onChange={() => setDarkMode(!darkMode)}
                />
                <span className="slider round"> </span>
              </label>
            </div>
            <span
              style={{ color: darkMode ? 'var(--disable)' : 'var(--darkMode)' }}
            >
              {<NightlightRoundIcon />}
            </span>
          </div>
        </div>

        <div>
          <Routes>
            <Route path="/" element={<CountryTable countries={countries} />} />
            <Route path="/country/:name" element={<CountryPage />} />
            <Route
              path="/country/favorites"
              element={
                <Favorites
                  countries={countries}
                  favoriteCountries={favoriteCountries}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
