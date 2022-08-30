import MuiTableHead from '@mui/material/TableHead'
import { TableRow, TableCell, TableSortLabel } from '@mui/material'
import React from 'react'

console.log()
function TableHead({ orderBy, order, handleRequestSort }) {
  const createSortHandler = (property) => (event) => {
    handleRequestSort(event, property)
  }
  const style = {
    fontSize: '20px',
    fontWeight: 'bold',
  }

  return (
    <MuiTableHead>
      <TableRow>
        <TableCell sx={style}> Flag</TableCell>
        <TableCell
          key="name"
          sx={style}
          sortDirection={orderBy === 'name' ? order : false}
        >
          <TableSortLabel
            active={orderBy === 'name'}
            direction={orderBy === 'name' ? order : 'asc'}
            onClick={createSortHandler('name')}
            style={{ fontSize: '20px' }}
          >
            Name
          </TableSortLabel>
        </TableCell>

        <TableCell
          sx={style}
          sortDirection={orderBy === 'capital' ? order : false}
        >
          <TableSortLabel
            active={orderBy === 'capital'}
            direction={orderBy === 'capital' ? order : 'asc'}
            onClick={createSortHandler('capital')}
            style={{ fontSize: '20px' }}
          >
            Capital
          </TableSortLabel>
        </TableCell>
        <TableCell
          sx={style}
          sortDirection={orderBy === 'region' ? order : false}
        >
          <TableSortLabel
            active={orderBy === 'region'}
            direction={orderBy === 'region' ? order : 'asc'}
            onClick={createSortHandler('region')}
            style={{ fontSize: '20px' }}
          >
            Region
          </TableSortLabel>
        </TableCell>
        <TableCell
          sx={style}
          sortDirection={orderBy === 'population' ? order : false}
        >
          <TableSortLabel
            active={orderBy === 'population'}
            direction={orderBy === 'population' ? order : 'asc'}
            onClick={createSortHandler('population')}
            style={{ fontSize: '20px' }}
          >
            Population
          </TableSortLabel>
        </TableCell>
        <TableCell sx={style}>Language</TableCell>
        <TableCell sx={style}>Favorites</TableCell>
      </TableRow>
    </MuiTableHead>
  )
}

export default TableHead
