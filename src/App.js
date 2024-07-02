import { Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Register from './pages/register';
import Main from './pages/Main';
import Auth from './components/Auth';
import { useEffect } from 'react';

function App() {
	// useEffect(() => {
	//   fetch('http://localhost:8000/api/users/verify', {headers: {"Authorization": ''}}).then(res => res.json()).then(res => console.log(res))
	
	// }, [])
	
	

	return (
		<div className="App">
			<Routes>
				<Route exact path='/' element={<Auth><Main /></Auth>}></Route>

			</Routes>
			<Routes>
				

				<Route exact path='/login' Component={Login}></Route>
				<Route exact path='/register' Component={Register}></Route>
			</Routes>
		</div>
	);
}

export default App;
