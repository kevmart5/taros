import { carsActions } from '../../actions';
import axios from 'axios';
import { backendConstants } from '../../../constants';

export function editCarInformationRequest(carInfo) {
	const { API_URL } = backendConstants;
	return async (dispatch) => {
		dispatch({
			type: carsActions.EDIT_CAR_INFORMATION_REQUEST,
		});
		try {
			const response = await axios.put(`${API_URL}/car`, carInfo);
			dispatch({
				type: carsActions.EDIT_CAR_INFORMATION_SUCCESS,
				payload: response.data,
			});
		} catch (err) {
			dispatch({
				type: carsActions.EDIT_CAR_INFORMATION_FAILURE,
				error: 'Error in edit the car information',
			});
		}
	};
}
