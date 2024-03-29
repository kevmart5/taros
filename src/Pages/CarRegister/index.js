import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {
	FormGroup,
	FormControl,
	FormHelperText,
	Button,
	TextField,
} from '@material-ui/core';
import AlertMessage from '../../Components/AlertMessage';
import { Formik } from 'formik';

// Actions
import { saveCarInformation } from '../../redux/actionCreators/saveCarInfo';

import './styles.css';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		padding: 20,
	},
	paper: {
		height: 140,
		width: 100,
	},
	control: {
		padding: theme.spacing(2),
	},
}));

const CarRegister = ({ saveCarInformation, errorRegister }) => {
	const classes = useStyles();
	const history = useHistory();
	return (
		<div className={classes.root}>
			<Grid container spacing={4} className='root-container'>
				<Grid item xs={12}>
					<h1>Registrar Vehículo</h1>
				</Grid>
				<Grid item xs={12}>
					<Formik
						initialValues={{
							auto: '',
							motor: '',
							year: '',
							cc: '',
							plate: '',
							owner: '',
						}}
						onSubmit={(values, { setSubmitting }) => {
							saveCarInformation(values);
							setTimeout(() => {
								setSubmitting(false);
								history.push('/');
							}, 400);
						}}
					>
						{({
							values,
							errors,
							touched,
							handleChange,
							handleBlur,
							handleSubmit,
						}) => (
							<form onSubmit={handleSubmit}>
								<FormGroup>
									<div className='form--general-info'>
										<h3>Información General</h3>
									</div>
									<FormControl>
										<TextField
											label='Auto'
											id='auto'
											aria-describedby='my-helper-text'
											type='text'
											name='auto'
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.auto}
										/>
										<FormHelperText id='my-helper-text'>
											{errors.auto && touched.auto && errors.auto}
										</FormHelperText>
									</FormControl>
									<FormControl>
										<TextField
											label='Motor'
											id='motor'
											aria-describedby='my-helper-text'
											name='motor'
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.motor}
										/>
										<FormHelperText id='my-helper-text'>
											{errors.motor && touched.motor && errors.motor}
										</FormHelperText>
									</FormControl>
									<FormControl>
										<TextField
											label='Año'
											id='year'
											aria-describedby='my-helper-text'
											name='year'
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.year}
										/>
										<FormHelperText id='my-helper-text'>
											{errors.year && touched.year && errors.year}
										</FormHelperText>
									</FormControl>
									<FormControl>
										<TextField
											label='Cilindrada'
											id='cc'
											aria-describedby='my-helper-text'
											name='cc'
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.cc}
										/>
										<FormHelperText id='my-helper-text'>
											{errors.cc && touched.cc && errors.cc}
										</FormHelperText>
									</FormControl>
									<FormControl>
										<TextField
											label='Placa'
											id='plate'
											aria-describedby='my-helper-text'
											name='plate'
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.plate}
										/>
										<FormHelperText id='my-helper-text'>
											{errors.plate && touched.plate && errors.plate}
										</FormHelperText>
									</FormControl>
									<FormControl>
										<TextField
											label='Propietario'
											id='owner'
											aria-describedby='my-helper-text'
											name='owner'
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.owner}
										/>
										<FormHelperText id='my-helper-text'>
											{errors.owner && touched.owner && errors.owner}
										</FormHelperText>
									</FormControl>
								</FormGroup>
								<div className='form--button'>
									<Button variant='contained' color='primary' type='submit'>
										Guardar
									</Button>
								</div>
								{errorRegister && (
									<div className='error-container'>
										<AlertMessage message={errorRegister} error={true} />
									</div>
								)}
							</form>
						)}
					</Formik>
				</Grid>
			</Grid>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		car: state.cars.current,
		errorRegister: state.cars.error,
	};
};

const mapDispatchToProps = {
	saveCarInformation,
};

export default connect(mapStateToProps, mapDispatchToProps)(CarRegister);
