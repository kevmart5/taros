import { combineReducers } from 'redux';

// Reducers
import carsReducer from './cars';
import reportsReducer from './reports';
import authReducer from './auth';
import navigationReducer from './navigation';
import alertsReducer from './alerts';
import registerReducer from './register';

export default combineReducers({
	cars: carsReducer,
	reports: reportsReducer,
	auth: authReducer,
	navigation: navigationReducer,
	alerts: alertsReducer,
	register: registerReducer,
});
