import { carsActions } from '../actions';
import axios from 'axios';
import { backendConstants } from '../../constants/index';

export function saveCarInformation(carInfo) {
	const { API_URL } = backendConstants;
	return async (dispatch) => {
		dispatch({
			type: carsActions.CAR_SAVE_REQUEST,
		});
		try {
			const response = await axios.post(`${API_URL}/car`, carInfo);
			dispatch({
				type: carsActions.CAR_SAVE_SUCCESS,
				payload: response.data,
			});
		} catch (err) {
			const {
				data: { message },
			} = err.response;
			dispatch({
				type: carsActions.CAR_SAVE_FAILURE,
				error: message,
			});
		}
	};
}
