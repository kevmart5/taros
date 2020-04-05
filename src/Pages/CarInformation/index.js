import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { FaRegFolder } from 'react-icons/fa';

// Actions
import { getCarInfo } from '../../redux/actionCreators/cars/getCarInfo';
import { getCarReports } from '../../redux/actionCreators/reports/getCarReports';

//Components
import { makeStyles } from '@material-ui/core/styles';
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

import './styles.css';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		maxWidth: 752,
	},
	demo: {
		backgroundColor: theme.palette.background.paper,
	},
	title: {
		margin: theme.spacing(4, 0, 2),
	},
}));

const CarInformation = ({ getCarInfo, car, getCarReports, reports }) => {
	const { id } = useParams();
	const classes = useStyles();
	const history = useHistory();

	const goToChangeFluid = (params) => {
		history.push({
			pathname: '/fluid-changes',
			state: { change: params },
		});
	};
	useEffect(() => {
		getCarInfo(id);
		getCarReports(id);
	}, []);
	return (
		<Container maxWidth='xl'>
			<Grid container>
				<Grid container item xs={12}>
					<Typography variant='h2' component='h2'>
						{car.owner}
					</Typography>
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
								<div className={classes.demo}>
									<List
										subheader={
											<ListSubheader>Cambios de aceite y fluídos</ListSubheader>
										}
									>
										{reports.map((report) => (
											<ListItem
												button
												key={report.id}
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
								</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(CarInformation);
