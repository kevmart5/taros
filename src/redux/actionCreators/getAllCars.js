import { carsActions } from '../actions';
import axios from 'axios';
import { backendConstants } from '../../constants/index';

export function getAllCars() {
	const { API_URL } = backendConstants;
	return async (dispatch) => {
		dispatch({
			type: carsActions.CARS_GETALL_REQUEST,
		});
		try {
			const response = await axios.get(`${API_URL}/car`);
			const { data } = response;
			dispatch({
				type: carsActions.CARS_GETALL_SUCCESS,
				payload: data,
			});
		} catch (error) {
			const {
				data: { message },
			} = error.response;
			dispatch({
				type: carsActions.CARS_GETALL_FAILURE,
				error: message,
			});
		}
	};
}
