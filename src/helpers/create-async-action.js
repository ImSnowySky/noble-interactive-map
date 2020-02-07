import { createAction } from 'redux-actions';

export const createAsyncAction = actionType => {
	const startedType = `${actionType}_STARTED`;
	const successType = `${actionType}_SUCCESS`;
	const failureType = `${actionType}_FAILURE`;

	const started = createAction(startedType);
	const success = createAction(successType);
	const failure = createAction(failureType);

	return {
		started,
		success,
		failure,
	};
};

export default createAsyncAction;