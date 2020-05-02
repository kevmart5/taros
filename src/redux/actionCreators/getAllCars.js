import { carsActions } from '../actions';
import axios from 'axios';
import { backendConstants } from '../../constants/index';

export function getAllCars() {
	const { PORT } = backendConstants;
	return async (dispatch) => {
		dispatch({
			type: carsActions.CARS_GETALL_REQUEST,
		});
		axios
			.get(`${PORT}/cars`)
			.then((response) => {
				try {
					const { data } = response;
					dispatch({
						type: carsActions.CARS_GETALL_SUCCESS,
						payload: data,
					});
				} catch (err) {
					dispatch({
						type: carsActions.CARS_GETALL_FAILURE,
						error: err,
					});
				}
			})
			.catch((error) => {
				dispatch({
					type: carsActions.CARS_GETALL_FAILURE,
					error: error,
				});
			});
	};
}
