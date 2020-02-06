import { createStore, applyMiddleware } from 'redux';
import createRootReducer from './reducer';
import thunk from 'redux-thunk';

export default function configureStore(preloadedState) {
	const store = createStore(
		createRootReducer(),
		preloadedState,
		applyMiddleware(thunk),
	);
	return store;
}