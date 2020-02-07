import { handleActions } from 'redux-actions';
import { getZonesAction, getLocationsAction, getPointsAction } from './actions';

const initialState = {
  pending: false,
  zones: [],
  locations: [],
  points: [],
};

export default handleActions(
	{
		[getZonesAction.success]: (state, payload) => {
			return {
				...state,
				zones: payload,
			}
		},
		[getLocationsAction.success]: (state, payload) => {
			return {
				...state,
				locations: payload,
			}
		},
		[getPointsAction.success]: (state, payload) => {
			return {
				...state,
				points: payload,
			}
		},
	},
	initialState,
);