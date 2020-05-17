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

import './styles.css';

const CarInformation = ({
	getCarInfo,
	car,
	getCarReports,
	reports,
	getCarFixesReports,
	fixes,
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
								<List subheader={<ListSubheader>Reparaciones</ListSubheader>}>
									{fixes.map((fix) => (
										<ListItem
											button
											key={fix.id}
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
	};
};

const mapDispatchToProps = {
	getCarInfo,
	getCarReports,
	getCarFixesReports,
};

export default connect(mapStateToProps, mapDispatchToProps)(CarInformation);
