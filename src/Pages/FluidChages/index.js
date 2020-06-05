import React from 'react';
import { connect } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';

// Actions
import { getCarInfo } from '../../redux/actionCreators/cars/getCarInfo';
import { getCarReports } from '../../redux/actionCreators/reports/getCarReports';

//Components
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import { appStrings } from '../../constants';

const FluidChanges = ({}) => {
	const location = useLocation();
	const history = useHistory();
	const { change, car } = location.state;

	const onCreateFluidChangeReport = (car) => {
		console.log('Report car', car);
		// setCarEditInfo(car);
		// history.push('/car-edit-information');
	};

	return (
		<Container maxWidth='xl'>
			<Grid container>
				<Grid container item xs={12}>
					<Grid item xs={9}>
						<Typography variant='h3' component='h3'>
							{appStrings.FLUID_CHANGES_TITLE}
						</Typography>
					</Grid>
				</Grid>
				<Grid item xs={12}>
					<Card>
						<CardContent>
							<Grid item xs={12}>
								<Typography variant='h4' component='h4'>
									Información del cambio
								</Typography>
								<Typography variant='subtitle1' component='p'>
									Fecha del cambio: {change.procedureDate}
								</Typography>
								<Typography variant='subtitle1' component='p'>
									Kilometraje: {change.mileage}
								</Typography>
								<Typography variant='subtitle1' component='p'>
									Tipo de aceite aplicado y marca: {change.type} {change.brand}
								</Typography>
								<Typography variant='subtitle1' component='p'>
									Cantidad: {change.quantity}
								</Typography>
								<Divider />
								<Typography variant='h4' component='h4'>
									Próximo cambio
								</Typography>
								<Typography variant='subtitle1' component='p'>
									Kilómetros: {change.nextMileage}
								</Typography>
								<Typography variant='subtitle1' component='p'>
									Siguiente fecha de cambio: {change.nextDate}
								</Typography>
							</Grid>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</Container>
	);
};

const mapStateToProps = (state) => {
	return {
		car: state.cars.current,
		reports: state.reports.reports,
	};
};

const mapDispatchToProps = {
	getCarInfo,
	getCarReports,
};

export default connect(mapStateToProps, mapDispatchToProps)(FluidChanges);
