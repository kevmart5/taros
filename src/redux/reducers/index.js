import { combineReducers } from 'redux';

// Reducers
import carsReducer from './cars';
import reportsReducer from './reports';

export default combineReducers({
	cars: carsReducer,
	reports: reportsReducer,
});
