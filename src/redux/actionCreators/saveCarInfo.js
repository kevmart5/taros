import { carsActions } from '../actions';
import axios from 'axios';
import { backendConstants } from '../../constants/index';

export function saveCarInformation(carInfo) {
	const { PORT } = backendConstants;
	return async (dispatch) => {
		dispatch({
			type: carsActions.CAR_SAVE_REQUEST,
		});
		try {
			axios
				.post(`${PORT}/cars`, carInfo)
				.then((val) => {
					console.log('value after post', val);
					dispatch({
						type: carsActions.CAR_SAVE_SUCCESS,
						payload: carInfo,
					});
				})
				.catch((error) => {
					dispatch({
						type: carsActions.CAR_SAVE_FAILURE,
						error: 'Error saving the car information',
					});
				});
		} catch (err) {
			dispatch({
				type: carsActions.CAR_SAVE_FAILURE,
				error: 'Error saving the car information',
			});
		}
	};
}
