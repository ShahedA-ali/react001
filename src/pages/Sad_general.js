import React, { useEffect, useState } from "react";
import Grid from "../components/Grid";
import Input from "../components/Input";
import ExcelExport from "../components/ExcelExport";
import Button from "../components/Button";
import MultiSelect from "../components/MultiSelect";
import Timer from "../components/Timer";
import { FaFilter } from "react-icons/fa";
import { FaRegFileExcel } from "react-icons/fa";

function Sad_general() {
  const [data, setData] = useState();
  const [TIN, setTIN] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [type, setType] = useState([])
  const [value, setValue] = useState("");
  const [startTimer, setStartTimer] = useState(false);
  const [loading, setLoading] = useState(false)
  const [filteredData, setFilteredData] = useState([])

  // useEffect(() => {
  // fetch("http://localhost:8000/api/report/sad-general?type=I")
  //     .then((res) => res.json())
  //     .then((res) => setData(res));
  //   }, []);


  const exportFilteredData = (e) => {
    console.log(e)
  }

  const search = () => {
    // console.log(type)
    setStartTimer(true);
    setLoading(true);
    const controller = new AbortController();
    const types = type.map(type => `&type=${type.text[0]}`).join('')
    const response = fetch(`http://localhost:8000/api/report/sad-general?COD=${TIN}${types}&start=${from}&end=${to}`, {signal: controller.signal})
      .then((res) => res.json())
      .then((res) => setData(res)).then(() => {setStartTimer(false); setLoading(false)});
      // setStartTimer(false)
      // setLoading(false)
      // console.log(response.status)
  }

  return (
    <div className="main">
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
        {data && (
          <div className="m-w-1/3 text-gray-600 rounded px-3 text-right">
            <ExcelExport
              apiData={data.data}
              fileName={"a+date"}
              className={
                "mx-2 bg-green-600 px-6 py-1.5 font-semibold text-white rounded"
              }
              btnText="Export"
              icon={<FaRegFileExcel />}
            />
            <ExcelExport
              apiData={filteredData}
              fileName={"b+date"}
              className={
                "mx-2 bg-[#5676eedd] px-6 py-1.5 font-semibold text-white rounded"
              }
              btnText="Export Filtered"
              icon={<FaFilter />}
            />
            {/* <ExcelExport apiData={data.data} fileName={'a+date'} btnText='Export Filtered' className={'mx-2 bg-blue-700 px-6 py-1.5 font-semibold text-white rounded'} /> */}
          </div>
        )}
      </header>
      <div className="grid grid-cols-9 m-5 gap-x-3">
        <label className="ml-1 col-span-2" htmlFor="tin">TIN</label>
        <label className="ml-1 col-span-2" htmlFor="from">From <label className="right-0" htmlFor="M">میلادی</label><input type="radio" value={'M'} id="M" name="calender" /></label>
        <label className="ml-1 col-span-2" htmlFor="to">To <label htmlFor="S">هجری شمسی</label><input type="radio" value={'S'} name="calender" id="S" /></label>
        <label className="ml-1 col-span-2" htmlFor="type">Type</label>
        <div className="row-span-2 flex flex-col gap-y">
          <Button onClick={() => search()} className={'bg-[rgba(41,81,201,0.67)] text-white font-semibold py-1 focus:shadow-[0_0_0_2px_rgba(41,81,201,0.3)]'}>Search</Button>
          <div className="flex justify-between relative">
            <Timer startTimer={startTimer} />
            {loading &&
              <div className="w-full text-center my-auto relative overflow-hidden mx-2">
                <div className="absolute -z-10 loader"></div>
                <div className="text-xs z-10 text-white">loading ...</ div>
              </div>
            }
          </div>
        </div>
        <Input
          value={TIN}
          id={"tin"}
          onChange={(e) => setTIN(e.target.value)}
          type="number"
          min={0}
          wrapperClassName={'col-span-2'}
        />
        <Input
          value={from}
          id={"from"}
          onChange={(e) => setFrom(e.target.value)}
          type="date"
          wrapperClassName={'col-span-2'}
        />

        <Input
          value={to}
          id={"to"}
          onChange={(e) => setTo(e.target.value)}
          type="date"
          wrapperClassName={'col-span-2'}
        />
        <MultiSelect onChange={(e) => setType(e)} data={['Import', 'Export']} btnClassName={'text-sm py-0'} wrapperClassName={'col-span-2 top-0'} />

      </div>
      <div className="m-5">
        <Grid data={data} filterData={(e) => setFilteredData(e)} pageSize={15}></Grid>
      </div>
    </div>
  );
}

export default Sad_general;
