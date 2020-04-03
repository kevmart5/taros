import { carsActions } from '../../actions';
const INITIAL_STATE = {
	cars: [],
	isLoading: false,
	error: '',
	current: {}
};

function carsReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case carsActions.CARS_GETALL_REQUEST:
			return {
				...state,
				isLoading: true
			};

		case carsActions.CARS_GETALL_SUCCESS:
			return {
				...state,
				cars: [...state.cars, ...action.payload],
				isLoading: false
			};

		case carsActions.CARS_GETALL_FAILURE:
			return {
				...state,
				error: action.error,
				isLoading: false
			};
		case carsActions.CAR_SAVE_REQUEST:
			return {
				...state,
				isLoading: true
			};
		case carsActions.CAR_SAVE_SUCCESS:
			return {
				...state,
				current: { ...action.payload },
				isLoading: false
			};
		case carsActions.CAR_SAVE_FAILURE:
			return {
				...state,
				error: action.error,
				isLoading: false
			};
		default:
			return state;
	}
}

export default carsReducer;
