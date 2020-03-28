import React, { useState } from 'react';
import { Formik } from 'formik';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import {
	FormGroup,
	FormControl,
	FormLabel,
	InputLabel,
	Input,
	FormHelperText,
	Button,
	TextField
} from '@material-ui/core';
import Container from '@material-ui/core/Container';

import useStyles from './styles';

const Home = () => {
	const [initialValues, setInitialValues] = useState({});
	return (
		<Container maxWidth='xl'>
			<Grid container spacing={1}>
				<Grid container item lg={12} spacing={3}>
					<div>
						<h1>Registro Vehículo</h1>
					</div>
				</Grid>
				<Grid item lg={12} spacing={3}>
					<Formik
						initialValues={{
							auto: '',
							motor: '',
							year: '',
							cc: '',
							plate: '',
							owner: ''
						}}
						validate={values => {
							const errors = {};
							if (!values.email) {
								errors.email = 'Required';
							} else if (
								!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
							) {
								errors.email = 'Invalid email address';
							}
							return errors;
						}}
						onSubmit={(values, { setSubmitting }) => {
							setTimeout(() => {
								alert(JSON.stringify(values, null, 2));
								setSubmitting(false);
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
							isSubmitting
							/* and other goodies */
						}) => (
							<form onSubmit={handleSubmit}>
								<FormGroup>
									<FormLabel component='legend'>Información General</FormLabel>
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
											id='anno'
											aria-describedby='my-helper-text'
											name='anno'
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
											id='cilidrada'
											aria-describedby='my-helper-text'
											name='cilidrada'
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
											id='placa'
											aria-describedby='my-helper-text'
											name='placa'
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
											id='propietario'
											aria-describedby='my-helper-text'
											name='propietario'
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.owner}
										/>
										<FormHelperText id='my-helper-text'>
											{errors.owner && touched.owner && errors.owner}
										</FormHelperText>
									</FormControl>
								</FormGroup>
								<Button variant='contained' color='primary' type='submit'>
									Guardar
								</Button>
							</form>
						)}
					</Formik>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Home;
