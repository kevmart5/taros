import { carsActions } from '../../actions';
import axios from 'axios';
import { backendConstants } from '../../../constants';

export function editCarInformationRequest(carInfo) {
	const { PORT } = backendConstants;
	return async (dispatch) => {
		dispatch({
			type: carsActions.EDIT_CAR_INFORMATION_REQUEST,
		});
		try {
			axios
				.put(`${PORT}/cars/${carInfo.id}`, carInfo)
				.then((val) => {
					dispatch({
						type: carsActions.EDIT_CAR_INFORMATION_SUCCESS,
						payload: carInfo,
					});
				})
				.catch((error) => {
					dispatch({
						type: carsActions.EDIT_CAR_INFORMATION_FAILURE,
						error: 'Error in edit the car information',
					});
				});
		} catch (err) {
			dispatch({
				type: carsActions.EDIT_CAR_INFORMATION_FAILURE,
				error: 'Error in edit the car information',
			});
		}
	};
}
