import { carsActions } from '../actions';

export function saveCarInformation(carInfo) {
	return async dispatch => {
		dispatch({
			type: carsActions.CAR_SAVE_REQUEST
		});
		try {
			dispatch({
				type: carsActions.CAR_SAVE_SUCCESS,
				payload: carInfo
			});
		} catch (err) {
			dispatch({
				type: carsActions.CAR_SAVE_FAILURE,
				error: 'Error saving the car information'
			});
		}
	};
}
