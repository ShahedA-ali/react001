import React, { useEffect, useState } from 'react'
import { Paper } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

function Grid({ page = 0, pageSize = 10, data, className }) {

  const [columns, setColumns] = useState()
  const [rows, setRows] = useState()
  const [filteredRows, setFilteredRows] = useState()

  useEffect(() => {
    if (data) {
      const allColumns = Object.keys(data.data[0]);
      setRows(data.data.map((row) => ({ id: Math.random(), ...row })))
      setColumns(allColumns.map((column) => ({ field: column })));

    }
  }, [data])

  console.log(filteredRows)
  const paginationModel = { page, pageSize };


  return (
    <>
      {data && columns && rows &&
        (
          <Paper sx={{ height: "89vh", width: "100%", overflow: 'hidden' }} className={className}>
            <DataGrid
              rows={rows}
              columns={columns}
              loading={!data}
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