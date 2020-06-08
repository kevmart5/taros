import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { FaPen, FaCarAlt } from 'react-icons/fa';

// Actions
import { getAllCars } from '../../redux/actionCreators/getAllCars';
import { setCarEditInfo } from '../../redux/actionCreators/cars/setEditCarInfo';

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

// Strings
import { appStrings } from '../../constants';

const EditCar = ({ getAllCars, cars, setCarEditInfo }) => {
	const history = useHistory();

	useEffect(() => {
		getAllCars();
	}, []);

	const setCarToEdit = (car) => {
		setCarEditInfo(car);
		history.push('/car-edit-information');
	};
	return (
		<Container maxWidth='xl'>
			<Grid container>
				<Grid container item xs={12}>
					<Typography variant='h2' component='h2'>
						{appStrings.DELETE_CAR_PAGE_TITLE}
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<List dense={false}>
						{cars.map((car) => (
							<ListItem key={car._id}>
								<ListItemAvatar>
									<Avatar>
										<FaCarAlt />
									</Avatar>
								</ListItemAvatar>
								<ListItemText primary={car.auto} secondary={car.owner} />
								<ListItemSecondaryAction>
									<FaPen
										onClick={() => setCarToEdit(car)}
										style={{
											marginRight: '8%',
										}}
									/>
								</ListItemSecondaryAction>
							</ListItem>
						))}
					</List>
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

const mapDispatchToProps = {
	getAllCars,
	setCarEditInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditCar);
