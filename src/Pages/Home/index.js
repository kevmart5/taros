import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import uniqueId from 'lodash/uniqueId';
import { FaTrashAlt } from 'react-icons/fa';
// Actions
import { getAllCars } from '../../redux/actionCreators/getAllCars';

//Components Material UI
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

import './styles.css';

const useStyles = makeStyles({
	table: {
		minWidth: 650,
	},
});

const Home = ({ getAllCars, cars }) => {
	const classes = useStyles();
	const history = useHistory();
	const goToCarInfo = (id) => {
		history.push(`/car-information/${id}`);
	};
	useEffect(() => {
		getAllCars();
	}, []);
	return (
		<Container maxWidth='xl' className='main-container'>
			<Grid container>
				<Grid container item lg={12} spacing={3}>
					<div>
						<h1></h1>
					</div>
				</Grid>
				<Grid item xs={12}>
					<TableContainer component={Paper}>
						<Table className={classes.table} aria-label='simple table'>
							<TableHead>
								<TableRow>
									<TableCell>Cliente</TableCell>
									<TableCell align='right'>Vehículo</TableCell>
									<TableCell align='right'>Placa</TableCell>
									<TableCell align='right'>Opciones</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{cars.map((car) => (
									<TableRow
										hover
										role='checkbox'
										onClick={() => goToCarInfo(car._id)}
										key={uniqueId('car')}
									>
										<TableCell component='th' scope='row'>
											{car.owner}
										</TableCell>
										<TableCell align='right'>{car.auto}</TableCell>
										<TableCell align='right'>{car.plate}</TableCell>
										<TableCell align='right'>
											<FaTrashAlt onClick={() => console.log('Click delete')} />
										</TableCell>
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

const mapStateToProps = (state) => {
	return {
		cars: state.cars.cars,
	};
};

const mapDispatchToProps = {
	getAllCars,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
