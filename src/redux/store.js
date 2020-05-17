import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers';

let logger = {};
if (process.env.NODE_ENV === 'development') {
	logger = createLogger({
		collapsed: true,
		duration: true,
		diff: true,
	});
}
const store = createStore(
	reducer,
	composeWithDevTools(applyMiddleware(thunk, logger))
);

export default store;
