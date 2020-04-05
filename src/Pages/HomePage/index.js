import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, useParams, useHistory } from 'react-router-dom';
import uniqueId from 'lodash/uniqueId';
import { FaPen, FaTrashAlt, FaRegEye } from 'react-icons/fa';
// Actions
import { getAllCars } from '../../redux/actionCreators/getAllCars';

//Components
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

const HomePage = ({ getAllCars, cars }) => {
	const classes = useStyles();
	const history = useHistory();
	const goToCarInfo = (id) => {
		history.push(`/car-information/${id}`);
	};
	useEffect(() => {
		getAllCars();
	}, []);
	return (
		<Container maxWidth='xl'>
			<Grid container>
				<h1>Hello world</h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
