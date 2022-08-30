import Table from '@mui/material/Table'
import TableHead from './TableHead'
import TableBody from './TableBody'
import TableContainer from '@mui/material/TableContainer'
import useCountries from '../../../custom-hooks/useCountries'
import { useState } from 'react'
import './style.css'
import Menu from '../../menu'

function CountryTable() {
  const [countries] = useCountries()
  const [searchTerm, setSearchTerm] = useState('')
  const [order, setOrder] = useState('asc')
  const [orderBy, setOrderBy] = useState('name')
  const handleRequestSort = (event, property) => {
    const isAscending = orderBy === property && order === 'asc'
    setOrder(isAscending ? 'desc' : 'asc')
    setOrderBy(property)
  }

  function descendingComparator(a, b, orderBy) {
    if (orderBy === 'name') {
      if (b.name.common < a.name.common) {
        return -1
      }
      if (b.name.common > a.name.common) {
        return 1
      }
      return 0
    } else {
      if (b[orderBy] < a[orderBy]) {
        return -1
      }
      if (b[orderBy] > a[orderBy]) {
        return 1
      }
      if (b[orderBy] === a[orderBy]) {
        if (b.name.common < a.name.common) {
          return -1
        }
        if (b.name.common > a.name.common) {
          return 1
        }
        return 0
      }
      return 0
    }
  }
  function getComparator(order, orderBy) {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy)
  }

  function stableSort(countries, comparator) {
    const stabilizedThis = countries.map((el, index) => [el, index])
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0])
      if (order !== 0) {
        return order
      }
      return a[1] - b[1]
    })
    return stabilizedThis.map((el) => el[0])
  }

  return (
    <div className="tableContainer">
      <Menu />
      <TableContainer>
        <input
          className="searchField"
          type="text"
          placeholder="Search for the country"
          onChange={(event) => {
            setSearchTerm(event.target.value)
          }}
        />
        <Table>
          <TableHead
            orderBy={orderBy}
            order={order}
            handleRequestSort={handleRequestSort}
          />
          <TableBody
            countries={countries}
            searchTerm={searchTerm}
            order={order}
            orderBy={orderBy}
            stableSort={stableSort}
            getComparator={getComparator}
          />
        </Table>
      </TableContainer>
    </div>
  )
}

export default CountryTable
