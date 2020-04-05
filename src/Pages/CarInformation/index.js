import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
// import { FaPen, FaTrashAlt, FaRegEye } from 'react-icons/fa';

// Actions
import { getCarInfo } from '../../redux/actionCreators/cars/getCarInfo';

//Components
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import './styles.css';

const CarInformation = ({ getCarInfo, car }) => {
	const { id } = useParams();
	useEffect(() => {
		getCarInfo(id);
	}, []);
	return (
		<Container maxWidth='xl'>
			<Grid container>
				<Grid container item xs={12}>
					<Typography variant='h3' component='h3' className='car-owner--title'>
						{car.owner}
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Card>
						<CardContent>
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
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={12}>
					<Typography variant='h2' component='h2'>
						Reportes
					</Typography>
				</Grid>
			</Grid>
		</Container>
	);
};

const mapStateToProps = (state) => {
	return {
		car: state.cars.current,
	};
};

const mapDispatchToProps = {
	getCarInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(CarInformation);
