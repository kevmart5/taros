import React from 'react';
import { connect } from 'react-redux';
// import uniqueId from 'lodash/uniqueId';
// import { FaPen, FaTrashAlt, FaRegEye } from 'react-icons/fa';
// Actions

//Components
import Grid from '@material-ui/core/Grid';

import Container from '@material-ui/core/Container';

const CarInformation = () => {
	return (
		<Container maxWidth='xl'>
			<Grid container>
				<Grid container item lg={12} spacing={3}>
					<div>
						<h1>Información del vehículo</h1>
					</div>
				</Grid>
				<Grid item xs={12}>
					<p>Car information</p>
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

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CarInformation);
