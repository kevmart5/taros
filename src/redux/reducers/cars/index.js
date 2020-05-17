import { carsActions } from '../../actions';
const INITIAL_STATE = {
	cars: [],
	isLoading: false,
	error: '',
	current: {},
};

function carsReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case carsActions.CARS_GETALL_REQUEST:
			return {
				...state,
				isLoading: true,
			};

		case carsActions.CARS_GETALL_SUCCESS:
			return {
				...state,
				cars: [...action.payload],
				isLoading: false,
			};

		case carsActions.CARS_GETALL_FAILURE:
			return {
				...state,
				error: action.error,
				isLoading: false,
			};
		case carsActions.CAR_SAVE_REQUEST:
			return {
				...state,
				isLoading: true,
			};
		case carsActions.CAR_SAVE_SUCCESS:
			return {
				...state,
				current: { ...action.payload },
				isLoading: false,
			};
		case carsActions.CAR_SAVE_FAILURE:
			return {
				...state,
				error: action.error,
				isLoading: false,
			};
		case carsActions.CAR_INFO_REQUEST:
			return {
				...state,
				isLoading: true,
			};
		case carsActions.CAR_INFO_SUCCESS:
			return {
				...state,
				current: { ...action.payload },
				isLoading: false,
			};
		case carsActions.CAR_INFO_FAILURE:
			return {
				...state,
				error: action.error,
				isLoading: false,
			};
		case carsActions.SET_CAR_EDIT_SUCCESS: {
			return {
				...state,
				current: { ...action.payload },
			};
		}
		case carsActions.DELETE_CAR_REQUEST:
			return {
				...state,
				isLoading: true,
			};
		case carsActions.DELETE_CAR_SUCCESS:
			return {
				...state,
				isLoading: false,
			};
		case carsActions.DELETE_CAR_FAILURE:
			return {
				...state,
				error: action.error,
				isLoading: false,
			};
		default:
			return state;
	}
}

export default carsReducer;
