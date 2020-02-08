import { createAction } from 'redux-actions';
import { actionTypes } from './constants';

export const changeScrolling = createAction(
  actionTypes.CHANGE_SCROLLING, scrolling => scrolling
);

export const changePosition = createAction(
  actionTypes.CHANGE_POSITION, (x, y) => ({ x, y })
);

export const changeZoom = createAction(
  actionTypes.CHANGE_ZOOM, zoom => zoom
);

export const changeCurrentMousePosition = createAction(
  actionTypes.CHANGE_CURRENT_MOUSE_POSITION, (x, y) => ({ x, y }),
);

export const changeWatchForMouse = createAction(
  actionTypes.CHANGE_WATCH_FOR_MOUSE, watch => watch,
);