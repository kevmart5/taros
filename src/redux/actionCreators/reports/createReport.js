import { reportsActions } from '../actions';
import axios from 'axios';
import { backendConstants } from '../../constants/index';

export function saveReportInformation(carReportInfo) {
	const { API_URL } = backendConstants;
	return async (dispatch) => {
		dispatch({
			type: reportsActions.REPORTS_CREATE_REPORT_REQUEST,
		});
		try {
			const response = await axios.post(`${API_URL}/car`, carInfo);
			dispatch({
				type: reportsActions.REPORTS_CREATE_REPORT_SUCCESS,
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
