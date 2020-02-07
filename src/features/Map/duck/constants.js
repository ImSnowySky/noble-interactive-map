import keyMirror from '../../../helpers/keymirror';

export const FEATURE_NAME = 'MAP';

export const actionTypes = keyMirror(
	{
    CHANGE_SCROLLING: null,
    CHANGE_POSITION: null,
    CHANGE_ZOOM: null,
	},
	FEATURE_NAME,
);