import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Header from './Components/Header';
import CarRegister from './Pages/CarRegister';
import CarInformation from './Pages/CarInformation';

import './App.css';

function App() {
	return (
		<Router>
			<div>
				<Header />
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route exact path='/car-register'>
						<CarRegister />
					</Route>
					<Route exact path='/car-information/:id'>
						<CarInformation />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
