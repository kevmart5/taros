import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { FaPen, FaCarAlt } from 'react-icons/fa';

// Actions
import { getAllCars } from '../../redux/actionCreators/getAllCars';
import { setCarEditInfo } from '../../redux/actionCreators/cars/setEditCarInfo';
import { saveCarInformation } from '../../redux/actionCreators/saveCarInfo';

//Components
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import {
	FormGroup,
	FormControl,
	FormHelperText,
	Button,
	TextField,
} from '@material-ui/core';
import {
	MuiPickersUtilsProvider,
	KeyboardTimePicker,
	KeyboardDatePicker,
} from '@material-ui/pickers';
import AlertMessage from '../../Components/AlertMessage';
import { Formik } from 'formik';

// Strings
import { appStrings } from '../../constants';

const CarReport = ({ getAllCars, cars, setCarEditInfo, error, isLoading }) => {
	const history = useHistory();
	const navigationParams = useParams();
	const [formInitialValues, setFormInitialValues] = useState({});
	const [showSuccessMessage, setShowSuccessMessage] = useState(false);
	const [successMessage, setSuccessMessage] = useState('');
	const [nextDate, setNextDate] = useState(new Date());
	const [procedureDate, setProcedureDate] = useState(new Date());

	const handleNextDateChange = (date) => {
		setNextDate(date);
	};

	const handleProcedureDateChange = (date) => {
		setProcedureDate(date);
	};

	useEffect(() => {
		setFormInitialValues({
			car: navigationParams.id,
			mileage: '',
			type: '',
			brand: '',
			quantity: '',
			nextMileage: '',
		});
	}, []);

	const onSaveCarInformation = (values) => {
		const completeReportValues = { ...values, nextDate, procedureDate };
		console.log('completeReportValues', completeReportValues);
		// saveCarInformation(values);
	};

	const onSuccessSaveCar = () => {
		const message = appStrings.CAR_SUCCESS_SAVE_MESSAGE;
		setShowSuccessMessage(true);
		setSuccessMessage(message);
	};

	return (
		<Container maxWidth='xl'>
			<Grid container>
				<Grid container item xs={12}>
					<Typography variant='h2' component='h2'>
						{appStrings.REPORTS_CAR_PAGE_TITLE}
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Formik
						initialValues={formInitialValues}
						onSubmit={(values, { setSubmitting }) => {
							onSaveCarInformation(values);
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
										<h3>{appStrings.REPORTS_PAGE_FORM_TITLE}</h3>
									</div>
									<FormControl>
										<KeyboardDatePicker
											disableToolbar
											variant='inline'
											format='dd/MM/yyyy'
											margin='normal'
											id='procedureDate'
											name='procedureDate'
											label={appStrings.REPORTS_PAGE_PROCEDURE_DATE}
											value={procedureDate}
											onChange={handleProcedureDateChange}
											KeyboardButtonProps={{
												'aria-label': 'change date',
											}}
										/>
									</FormControl>
									<FormControl>
										<TextField
											label={appStrings.REPORTS_PAGE_MILEAGE}
											id='mileage'
											aria-describedby='my-helper-text'
											name='mileage'
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.mileage}
										/>
										<FormHelperText id='my-helper-text'>
											{errors.mileage && touched.mileage && errors.mileage}
										</FormHelperText>
									</FormControl>
									<FormControl>
										<TextField
											label={appStrings.REPORTS_PAGE_TYPE}
											id='type'
											aria-describedby='my-helper-text'
											name='type'
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.type}
										/>
										<FormHelperText id='my-helper-text'>
											{errors.type && touched.type && errors.type}
										</FormHelperText>
									</FormControl>
									<FormControl>
										<TextField
											label={appStrings.REPORTS_PAGE_BRAND}
											id='brand'
											aria-describedby='my-helper-text'
											name='brand'
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.brand}
										/>
										<FormHelperText id='my-helper-text'>
											{errors.brand && touched.brand && errors.brand}
										</FormHelperText>
									</FormControl>
									<FormControl>
										<TextField
											label={appStrings.REPORTS_PAGE_QUANTITY}
											id='quantity'
											aria-describedby='my-helper-text'
											name='quantity'
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.quantity}
										/>
										<FormHelperText id='my-helper-text'>
											{errors.quantity && touched.quantity && errors.quantity}
										</FormHelperText>
									</FormControl>
									<FormControl>
										<TextField
											label={appStrings.REPORTS_PAGE_NEXT_MILEAGE}
											id='nextMileage'
											aria-describedby='my-helper-text'
											name='nextMileage'
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.nextMileage}
										/>
										<FormHelperText id='my-helper-text'>
											{errors.nextMileage &&
												touched.nextMileage &&
												errors.nextMileage}
										</FormHelperText>
									</FormControl>
									<FormControl>
										<KeyboardDatePicker
											disableToolbar
											variant='inline'
											format='dd/MM/yyyy'
											margin='normal'
											id='nextDate'
											label={appStrings.REPORTS_PAGE_NEXT_DATE}
											value={nextDate}
											onChange={handleNextDateChange}
											KeyboardButtonProps={{
												'aria-label': 'change date',
											}}
										/>
									</FormControl>
								</FormGroup>
								<div className='form--button'>
									<Button
										variant='contained'
										color='primary'
										type='submit'
										disabled={isLoading}
									>
										Guardar
									</Button>
								</div>
								{error && (
									<div className='error-container'>
										<AlertMessage message={error} error={true} />
									</div>
								)}
								{showSuccessMessage && (
									<div className='error-container'>
										<AlertMessage message={successMessage} error={false} />
									</div>
								)}
							</form>
						)}
					</Formik>
				</Grid>
			</Grid>
		</Container>
	);
};

const mapStateToProps = (state) => {
	return {
		car: state.cars.current,
		error: state.cars.error,
		isLoading: state.cars.isLoading,
		registerCar: state.cars.register,
	};
};

const mapDispatchToProps = {
	getAllCars,
	setCarEditInfo,
	saveCarInformation,
};

export default connect(mapStateToProps, mapDispatchToProps)(CarReport);
