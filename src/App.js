import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Register from './pages/register';
import Main from './pages/Main';

function App() {
	const [data, setData] = useState([])
	// useEffect(() => {
	// 	fetch('http://127.0.0.1:8000/login').then((res) => res.json()).then(res => setData(res));
	// }, [])

	return (
		<div className="App">
			<Routes>
				<Route exact path='/login' Component={Login}></Route>
				<Route exact path='/register' Component={Register}></Route>
				<Route exact path='/' Component={Main}></Route>

			</Routes>
		</div>
	);
}

export default App;
