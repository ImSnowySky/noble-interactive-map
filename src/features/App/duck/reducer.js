import { handleActions } from 'redux-actions';
import { getZonesAction, getLocationsAction, getPointsAction, changeCurrentZone } from './actions';

const initialState = {
  pending: false,
	zones: [],
	currentZone: null,
  locations: [],
  points: [],
};

export default handleActions(
	{
		[changeCurrentZone]: (state, { payload }) => ({ ...state, currentZone: payload }),
		[getZonesAction.started]: (state) => ({ ...state, pending: true }),
		[getZonesAction.success]: (state, { payload }) => ({
			...state,
			zones: payload,
			currentZone: payload.length > 0 ? payload[0].id : null,
			pending: false,
		}),
		[getLocationsAction.success]: (state, { payload }) => ({
			...state,
			locations: payload,
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