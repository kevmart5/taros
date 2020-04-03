import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
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
