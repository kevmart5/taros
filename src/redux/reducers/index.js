import { combineReducers } from 'redux';

// Reducers
import carsReducer from './cars';

export default combineReducers({
	cars: carsReducer
});
