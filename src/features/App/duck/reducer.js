import { handleActions } from 'redux-actions';
import { getZonesAction, getLocationsAction, getPointsAction, changeCurrentZone, changeCurrentLocation } from './actions';

const initialState = {
  pending: false,
	zones: [],
	currentZone: null,
	currentLocation: null,
  locations: [],
  points: [],
};

export default handleActions(
	{
		[changeCurrentZone]: (state, { payload }) => ({ ...state, currentZone: payload }),
		[changeCurrentLocation]: (state, { payload }) => ({ ...state, currentLocation: payload }),
		[getZonesAction.started]: (state) => ({ ...state, pending: true }),
		[getZonesAction.success]: (state, { payload }) => ({
			...state,
			zones: payload,
			currentZone: payload.length > 0 ? payload[0] : null,
			pending: false,
		}),
		[getLocationsAction.success]: (state, { payload }) => ({
			...state,
			locations: payload,
			currentLocation: payload.length > 0 ? payload[0] : null,
			pending: false,
		}),
		[getPointsAction.success]: (state, { payload }) => {
			return {
				...state,
				points: payload,
			}
		},
	},
	initialState,
);