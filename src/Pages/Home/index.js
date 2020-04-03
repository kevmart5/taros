import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import uniqueId from 'lodash/uniqueId';
// Actions
import { getAllCars } from '../../redux/actionCreators/getAllCars';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
	table: {
		minWidth: 650
	}
});

function createData(name, calories, fat, carbs, protein) {
	return { name, calories, fat, carbs, protein };
}

const rows = [
	createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
	createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
	createData('Eclair', 262, 16.0, 24, 6.0),
	createData('Cupcake', 305, 3.7, 67, 4.3),
	createData('Gingerbread', 356, 16.0, 49, 3.9)
];

const Home = ({ getAllCars, cars }) => {
	const classes = useStyles();
	const [carData, setCarData] = useState([]);
	useEffect(() => {
		getAllCars();
	}, []);
	return (
		<Container maxWidth='xl'>
			<Grid container>
				<Grid container item lg={12} spacing={3}>
					<div>
						<h1>Vehículos registrados</h1>
					</div>
				</Grid>
				<Grid item xs={12}>
					<TableContainer component={Paper}>
						<Table className={classes.table} aria-label='simple table'>
							<TableHead>
								<TableRow>
									<TableCell>Cliente</TableCell>
									<TableCell align='right'>Vehículo</TableCell>
									<TableCell align='right'>Motor</TableCell>
									<TableCell align='right'>Año</TableCell>
									<TableCell align='right'>CC</TableCell>
									<TableCell align='right'>Placa</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{cars.map(car => (
									<TableRow key={uniqueId('car')}>
										<TableCell component='th' scope='row'>
											{car.owner}
										</TableCell>
										<TableCell align='right'>{car.auto}</TableCell>
										<TableCell align='right'>{car.motor}</TableCell>
										<TableCell align='right'>{car.year}</TableCell>
										<TableCell align='right'>{car.cc}</TableCell>
										<TableCell align='right'>{car.plate}</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
				</Grid>
			</Grid>
		</Container>
	);
};

const mapStateToProps = state => {
	return {
		cars: state.cars.cars
	};
};

const mapDispatchToProps = {
	getAllCars
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
