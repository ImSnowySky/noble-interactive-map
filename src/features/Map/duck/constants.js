import keyMirror from '../../../helpers/keymirror';

export const FEATURE_NAME = 'MAP';

export const actionTypes = keyMirror(
	{
    CHANGE_SCROLLING: null,
    CHANGE_POSITION: null,
    CHANGE_ZOOM: null,
    CHANGE_CURRENT_MOUSE_POSITION: null,
    CHANGE_WATCH_FOR_MOUSE: null,
	},
	FEATURE_NAME,
);