import React, { useEffect, useState } from 'react'
import { Paper } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';


function Grid({ page = 0, pageSize = 10, data = {data: []}, filterData, className }) {

  const [columns, setColumns] = useState([])
  const [rows, setRows] = useState()
  const [filteredRows, setFilteredRows] = useState()

  const loading = Boolean(!data)

  const filteredData = (filteredRowsLookup, allData) => {
    const filteredRows = Object.entries(filteredRowsLookup).filter(([key, value]) => value === true).map(([key, value]) => key)
    const filteredRowsData = []
    for (const key in allData) {
        if (filteredRows.includes(key)) {
            filteredRowsData.push(allData[key])
        }
    }
    setFilteredRows(filteredRowsData)
} 

  useEffect(() => {
    if (data.data.length > 0) {
      const allColumns = Object.keys(data.data[0]);
      setRows(data.data.map((row) => ({ id: Math.random(), ...row })))
      setColumns(allColumns.map((column) => ({ field: column })));
    } else {
      setRows([])
    } 
  }, [data.data.length])

  console.log(data)
  const paginationModel = { page, pageSize };


  return (
    <>
      {
        (
          <Paper sx={{ height: "81vh", width: "100%", overflow: 'hidden' }} className={className}>
              <DataGrid
                columns={columns}
                rows={rows}
                loading={loading}
                onStateChange={(e) => {filteredData(e.filter.filteredRowsLookup, e.rows.dataRowIdToModelLookup); filterData(filteredRows)}}
                initialState={{
                  pagination: { paginationModel }
                }}
                sx={{ border: 1, borderColor: 'gray' }}
              />    
          </Paper>)
      }
    </>
  )
}

export default Grid