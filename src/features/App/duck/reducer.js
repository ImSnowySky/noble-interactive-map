import { handleActions } from 'redux-actions';
import { getZonesAction, getLocationsAction, getPointsAction, getLocations } from './actions';

const initialState = {
  pending: false,
  zones: [],
  locations: [],
  points: [],
};

export default handleActions(
	{
		[getZonesAction.started]: (state) => ({ ...state, pending: true }),
		[getZonesAction.success]: (state, { payload }) => ({
			...state,
			zones: payload,
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