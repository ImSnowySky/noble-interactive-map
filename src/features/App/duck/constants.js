import keyMirror from '../../../helpers/keymirror';

export const FEATURE_NAME = 'APP';

export const actionTypes = keyMirror(
	{
		GET_ZONES: null,
		GET_LOCATIONS: null,
		GET_POINTS: null,
		CHANGE_CURRENT_ZONE: null,
		CHANGE_CURRENT_LOCATION: null,
	},
	FEATURE_NAME,
);