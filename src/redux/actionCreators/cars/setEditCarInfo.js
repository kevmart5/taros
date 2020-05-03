import { carsActions } from '../../actions';

export function setCarEditInfo(carEditInfo) {
	return async (dispatch) => {
		dispatch({
			type: carsActions.SET_CAR_EDIT_SUCCESS,
			payload: carEditInfo,
		});
	};
}
