import { reportsActions } from '../../actions';
const INITIAL_STATE = {
	reports: [],
	fixes: [],
	isLoading: false,
	error: '',
	current: {},
};

function reportsReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case reportsActions.REPORTS_BY_CAR_REQUEST:
			return {
				...state,
				isLoading: true,
			};
		case reportsActions.REPORTS_BY_CAR_SUCCESS:
			return {
				...state,
				reports: [...action.payload],
				isLoading: false,
			};
		case reportsActions.REPORTS_BY_CAR_FAILURE:
			return {
				...state,
				error: action.error,
				isLoading: false,
			};
		case reportsActions.REPORTS_FIXES_BY_CAR_REQUEST:
			return {
				...state,
				isLoading: true,
			};
		case reportsActions.REPORTS_FIXES_BY_CAR_SUCCESS:
			return {
				...state,
				fixes: [...action.payload],
				isLoading: false,
			};
		case reportsActions.REPORTS_FIXES_BY_CAR_FAILURE:
			return {
				...state,
				isLoading: true,
			};
		default:
			return state;
	}
}

export default reportsReducer;
