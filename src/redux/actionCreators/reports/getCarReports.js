import { reportsActions } from '../../actions';
import axios from 'axios';
import { backendConstants } from '../../../constants/index';

export function getCarReports(carId) {
	const { API_URL } = backendConstants;
	return async (dispatch) => {
		dispatch({
			type: reportsActions.REPORTS_BY_CAR_REQUEST,
		});
		axios
			.get(`${API_URL}/report/car/${carId}`)
			.then((response) => {
				try {
					const { data } = response;
					dispatch({
						type: reportsActions.REPORTS_BY_CAR_SUCCESS,
						payload: data,
					});
				} catch (err) {
					dispatch({
						type: reportsActions.REPORTS_BY_CAR_FAILURE,
						error: err,
					});
				}
			})
			.catch((error) => {
				dispatch({
					type: reportsActions.REPORTS_BY_CAR_FAILURE,
					error: error,
				});
			});
	};
}

export function getCarFixesReports(carId) {
	const { API_URL } = backendConstants;
	return async (dispatch) => {
		dispatch({
			type: reportsActions.REPORTS_FIXES_BY_CAR_REQUEST,
		});
		axios
			.get(`${API_URL}/fix/car/${carId}`)
			.then((response) => {
				try {
					const { data } = response;
					dispatch({
						type: reportsActions.REPORTS_FIXES_BY_CAR_SUCCESS,
						payload: data,
					});
				} catch (err) {
					dispatch({
						type: reportsActions.REPORTS_FIXES_BY_CAR_FAILURE,
						error: err,
					});
				}
			})
			.catch((error) => {
				dispatch({
					type: reportsActions.REPORTS_FIXES_BY_CAR_FAILURE,
					error: error,
				});
			});
	};
}
