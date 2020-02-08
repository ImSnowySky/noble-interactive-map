import { handleActions } from 'redux-actions';
import { changeScrolling, changePosition, changeZoom, changeWatchForMouse, changeCurrentMousePosition } from './actions';

const initialState = {
  scrolling: false,
  x: 0,
  y: 0,
  zoom: 1,
  watchForMosue: false,
	currentMouseX: null,
	currentMouseY: null,
};

export default handleActions(
	{
		[changeScrolling]: (state, { payload: scrolling }) => ({ ...state, scrolling }),
    [changeZoom]: (state, { payload: zoom }) => ({ ...state, zoom }),
    [changeWatchForMouse]: (state, { payload: watchForMosue }) => ({ ...state, watchForMosue }),
    [changePosition]: (state, { payload }) => ({
      ...state,
      x: payload.x,
      y: payload.y
    }),
		[changeCurrentMousePosition]: (state, { payload }) => ({
			...state,
			currentMouseX: payload.x,
			currentMouseY: payload.y,
		}),
  },
  initialState
)