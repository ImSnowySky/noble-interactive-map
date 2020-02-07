import { combineReducers } from 'redux';
import * as app from '../features/App/duck';
import * as map from '../features/Map/duck';

export default () => combineReducers({
  app: app.reducer,
  map: map.reducer,
});