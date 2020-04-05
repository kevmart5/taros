import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Header from './Components/Header';
import CarRegister from './Pages/CarRegister';
import CarInformation from './Pages/CarInformation';
import FluidChanges from './Pages/FluidChages';
import CarFixes from './Pages/CarFixes';
import HomePage from './Pages/HomePage';
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
					<Route exact path='/fluid-changes'>
						<FluidChanges />
					</Route>
					<Route exact path='/car-fixes'>
						<CarFixes />
					</Route>
					<Route exact path='/home-page'>
						<HomePage />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
