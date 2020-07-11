import { carsActions } from '../../actions';
import axios from 'axios';
import { backendConstants } from '../../../constants';

export function deleteCarRequest(carInfo) {
	const { API_URL } = backendConstants;
	return async (dispatch) => {
		dispatch({
			type: carsActions.DELETE_CAR_REQUEST,
		});
		try {
			const { _id } = carInfo;
			const response = await axios.delete(`${API_URL}/car/${_id}`);
			dispatch({
				type: carsActions.DELETE_CAR_SUCCESS,
				payload: response.data,
			});
		} catch (err) {
			const {
				data: { message },
			} = err.response;
			dispatch({
				type: carsActions.DELETE_CAR_FAILURE,
				error: message,
			});
		}
	};
}
