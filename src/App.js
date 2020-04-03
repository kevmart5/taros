import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Header from './Components/Header';
import CarInformation from './Pages/CarInformation';

import './App.css';

function App() {
	return (
		<Router>
			<div>
				<Header />
				<Switch>
					<Route path='/about'>
						<About />
					</Route>
					<Route path='/carInformation'>
						<CarInformation />
					</Route>
					<Route path='/'>
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

function About() {
	return <h2>About</h2>;
}

export default App;
