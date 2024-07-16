import { Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Register from './pages/register';
import Main from './pages/Main';
import Auth from './components/Auth';
import Users from './pages/Users';
import Protect from './utils/Protect';
import Sad_general from './pages/Sad_general';
import Layout from './components/Layout';

function App() {
	// useEffect(() => {
	//   fetch('http://localhost:8000/api/users/verify', {headers: {"Authorization": ''}}).then(res => res.json()).then(res => console.log(res))
	
	// }, [])
	
	

	return (
		<div className="App">
			<Routes>
				<Route exact path='/' element={<Auth><Layout><Main /></Layout></Auth>}></Route>
				<Route exact path='/SAD_GENERAL_SEGMENT' element={<Auth><Protect><Layout><Sad_general /></Layout></Protect></Auth>}></Route>
			</Routes>
			<Routes>
				

				<Route exact path='/login' Component={Login}></Route>
				<Route exact path='/register' Component={Register}></Route>
				<Route exact path='/users' Component={Users}></Route>
			</Routes>
		</div>
	);
}

export default App;
