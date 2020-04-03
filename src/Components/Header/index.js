import React, { useState } from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import {
	FormGroup,
	FormControl,
	FormLabel,
	InputLabel,
	Input,
	FormHelperText,
	Button,
	TextField
} from '@material-ui/core';
import Container from '@material-ui/core/Container';
import './styles.css';

const Header = () => {
	return (
		<Container maxWidth='lg'>
			<Grid>
				<nav className='navigation-container'>
					<Link to='/' className='navigation-link'>
						Home
					</Link>
					<Link to='/carInformation' className='navigation-link'>
						Registro carro
					</Link>
					<Link to='/about' className='navigation-link'>
						About
					</Link>
				</nav>
			</Grid>
		</Container>
	);
};

export default Header;
