import { carsActions } from '../../actions';
import axios from 'axios';
import { backendConstants } from '../../../constants/index';

export function getCarInfo(carId) {
	const { API_URL } = backendConstants;
	return async (dispatch) => {
		dispatch({
			type: carsActions.CAR_INFO_REQUEST,
		});
		axios
			.get(`${API_URL}/car/${carId}`)
			.then((response) => {
				try {
					const { data } = response;
					dispatch({
						type: carsActions.CAR_INFO_SUCCESS,
						payload: data,
					});
				} catch (err) {
					dispatch({
						type: carsActions.CAR_INFO_FAILURE,
						error: err,
					});
				}
			})
			.catch((error) => {
				dispatch({
					type: carsActions.CAR_INFO_FAILURE,
					error: error,
				});
			});
	};
}
