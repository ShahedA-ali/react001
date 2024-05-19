import { useEffect, useState } from 'react';

function App() {
	const [data, setData] = useState([])
	useEffect(() => {
		fetch('http://127.0.0.1:8000').then((res) => res.json()).then(res => setData(res));
	}, [])

	return (
		<div className="App">
			{!data && <div>Loading....</div>}
			{data && <div>{data.result}</div>}
		</div>
	);
}

export default App;
