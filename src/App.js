import './App.css';

import { useLayoutEffect, useState } from 'react'
// router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { mySettings } from './settings.js'
/*
 * import { isLoggedIn } from './components/helpers/auth.js'
 *
 * import LoginRegister from './components/loginRegister/loginRegister.js'
import Login from './components/loginRegister/login.js'
import Register from './components/loginRegister/register.js'
*/
import LoadingScreen from './components/helpers/loadingScreen.js'
import Home from './components/home/home.js'

function App() {
	const [loggedIn, setLogInState] = useState(null)
	const [loading, setLoading] = useState(false)
	useLayoutEffect(() => {
		/*const checkToken = async () => {
			const loggedIn = await isLoggedIn()
			console.log(loggedIn)
			setLogInState(loggedIn)
		}
		checkToken()*/
	}, [])
	const toggleLoading = (loading) => {
		setLoading(loading)
	}
	const updateLoginStat =  (loggedIn) => {
		setLogInState(loggedIn)
	}

  return (
		<Router forceRefresh={true}>
			<Routes>
				<Route
					path='/'
					element={
						<Home />
					}
				/>
			</Routes>
			{loading && <LoadingScreen />}
    </Router>
  );
}

export default App;
