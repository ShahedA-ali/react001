import React, { useEffect, useState } from 'react'
import Grid from '../components/Grid'
import { Link } from 'react-router-dom'
import ExcelExport from '../components/ExcelExport'

function Sad_general() {
  const [data, setData] = useState()
  const [value, setValue] = useState('')

  useEffect(() => {
    fetch("http://localhost:8000/api/report/sad-general")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <div className='main'>
      <header className="flex bg-gray-600 py-3 pl-10 pr-32 text-white justify-between">
        <p className="text-3xl font-bold">SAD General Report</p>
        {/* <input
          type="search"
          placeholder="Search"
          className="w-1/3 text-gray-600 rounded px-3"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        // onKeyUp={() => search()}
        /> */}
      {data &&
        <div className="w-1/3 text-gray-600 rounded px-3 text-right">
          <ExcelExport apiData={data.data} fileName={'a+date'} className={'mx-2 bg-green-600 px-6 py-1.5 font-semibold text-white rounded'} />
          {/* <ExcelExport apiData={data.data} fileName={'a+date'} btnText='Export Filtered' className={'mx-2 bg-blue-700 px-6 py-1.5 font-semibold text-white rounded'} /> */}
        </div>
      }
      </header>
      <div className='m-5'>

        <Grid data={data} pageSize={15}></Grid>
      </div>

    </div>
  )
}

export default Sad_general