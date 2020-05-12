import React from 'react';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';

//Components
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import './styles.css';

const CarFixes = ({}) => {
	const location = useLocation();
	const { fix } = location.state;
	return (
		<Container maxWidth='xl'>
			<Grid container>
				<Grid container item xs={12}>
					<Typography variant='h2' component='h2'>
						Detalle de la reparación
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Card>
						<CardContent>
							<Grid item xs={12}>
								<div className='car-fix--container'>
									<Typography variant='subtitle1' component='p'>
										Fecha del cambio: {fix.date}
									</Typography>
									<Typography variant='subtitle1' component='p'>
										Kilometraje: {fix.mileage}
									</Typography>
									<Typography variant='subtitle1' component='p'>
										Repuestos cambiados: {fix.spareParts}
									</Typography>
								</div>
								<Divider />
								<div className='car-fix--container'>
									<Typography variant='h5' component='h5'>
										Procedimientos
									</Typography>
									<Typography variant='subtitle1' component='p'>
										{fix.procedures}
									</Typography>
								</div>
								<div className='car-fix--container'>
									<Typography variant='h5' component='h5'>
										Cometarios
									</Typography>
									<Typography variant='subtitle1' component='p'>
										{fix.comments}
									</Typography>
								</div>
								<Divider />
								<div className='car-fix--container'>
									<Typography variant='h5' component='h5'>
										Pendientes
									</Typography>
									<Typography variant='subtitle1' component='p'>
										{fix.pendings}
									</Typography>
								</div>
								<div className='car-fix--container'>
									<Typography variant='h5' component='h5'>
										Observaciones
									</Typography>
									<Typography variant='subtitle1' component='p'>
										{fix.observations}
									</Typography>
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
	return {};
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CarFixes);
