import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { FaRegFolder } from 'react-icons/fa';

// Actions
import { getCarInfo } from '../../redux/actionCreators/cars/getCarInfo';
import {
	getCarReports,
	getCarFixesReports,
} from '../../redux/actionCreators/reports/getCarReports';
import { deleteCarRequest } from '../../redux/actionCreators/cars/deleteCar';
import { setCarEditInfo } from '../../redux/actionCreators/cars/setEditCarInfo';

//Components
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Button from '@material-ui/core/Button';

// Loader
import Loader from '../../Components/Loader';

import './styles.css';

const CarInformation = ({
	getCarInfo,
	car,
	getCarReports,
	reports,
	getCarFixesReports,
	fixes,
	deleteCarRequest,
	isLoading,
	error,
	setCarEditInfo,
}) => {
	const { id } = useParams();
	const history = useHistory();

	const goToChangeFluid = (params) => {
		history.push({
			pathname: '/fluid-changes',
			state: { change: params },
		});
	};

	const goToFixes = (params) => {
		history.push({
			pathname: '/car-fixes',
			state: { fix: params },
		});
	};

	useEffect(() => {
		getCarInfo(id);
		getCarReports(id);
		getCarFixesReports(id);
	}, []);

	const onDeleteCar = (car) => {
		deleteCarRequest(car);
		if (!isLoading) return history.push('/');
	};

	const onEditCar = (car) => {
		setCarEditInfo(car);
		history.push('/car-edit-information');
	};

	return isLoading ? (
		<Container>
			<Loader loaderWidth={200} loaderHeight={200} />
		</Container>
	) : (
		<Container maxWidth='xl'>
			<Grid container>
				<Grid container item xs={12}>
					<Grid item xs={9}>
						<Typography variant='h3' component='h3'>
							{car.owner}
						</Typography>
					</Grid>
					<Grid item xs={3} spacing={1}>
						<Grid container spacing={1}>
							<Grid container item xs={12} spacing={3}>
								<Grid item xs={3}>
									<Button
										variant='contained'
										color='primary'
										onClick={() => onEditCar(car)}
										className='car-options--button'
									>
										Editar{' '}
									</Button>
								</Grid>
								<Grid item xs={3}>
									<Button
										variant='contained'
										color='secondary'
										onClick={() => onDeleteCar(car)}
									>
										Eliminar{' '}
									</Button>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12}>
					<Card>
						<CardContent>
							<Grid item xs={12}>
								<Typography variant='h5' component='h2'>
									Información general
								</Typography>
								<Typography variant='subtitle1' component='p'>
									Marca y modelo: {car.auto}
								</Typography>
								<Typography variant='subtitle1' component='p'>
									Año: {car.year}
								</Typography>
								<Typography variant='subtitle1' component='p'>
									Motor: {car.motor}
								</Typography>
								<Typography variant='subtitle1' component='p'>
									Cilindrada: {car.cc}
								</Typography>
								<Typography variant='subtitle1' component='p'>
									Placa del auto: {car.plate}
								</Typography>
							</Grid>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={12}>
					<Card className='car-reports--container'>
						<CardContent>
							<Grid item xs={12}>
								<Typography variant='h2' component='h2'>
									Reportes
								</Typography>
							</Grid>
							<Grid item xs={12} md={6}>
								<List
									subheader={
										<ListSubheader>Cambios de aceite y fluídos</ListSubheader>
									}
								>
									{reports.map((report) => (
										<ListItem
											button
											key={report._id}
											onClick={() => goToChangeFluid(report)}
										>
											<ListItemIcon>
												<FaRegFolder
													style={{
														marginRight: '8%',
													}}
												/>
											</ListItemIcon>
											<ListItemText primary={report.procedureDate} />
										</ListItem>
									))}
								</List>
								<List subheader={<ListSubheader>Reparaciones</ListSubheader>}>
									{fixes.map((fix) => (
										<ListItem
											button
											key={fix._id}
											onClick={() => goToFixes(fix)}
										>
											<ListItemIcon>
												<FaRegFolder
													style={{
														marginRight: '8%',
													}}
												/>
											</ListItemIcon>
											<ListItemText primary={fix.date} />
										</ListItem>
									))}
								</List>
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
		fixes: state.reports.fixes,
		isLoading: state.cars.isLoading,
		error: state.cars.error,
	};
};

const mapDispatchToProps = {
	getCarInfo,
	getCarReports,
	getCarFixesReports,
	deleteCarRequest,
	setCarEditInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(CarInformation);
