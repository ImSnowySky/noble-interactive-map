import { handleActions } from 'redux-actions';
import { changeScrolling, changePosition, changeZoom } from './actions';

const initialState = {
  scrolling: false,
  x: 0,
  y: 0,
  zoom: 1,
};

export default handleActions(
	{
		[changeScrolling]: (state, { payload: scrolling }) => ({ ...state, scrolling }),
    [changeZoom]: (state, { payload: zoom }) => ({ ...state, zoom }),
    [changePosition]: (state, { payload }) => ({
      ...state,
      x: payload.x,
      y: payload.y
    }),
  },
  initialState
)