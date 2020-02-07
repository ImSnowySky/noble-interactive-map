import { combineReducers } from 'redux';
import * as map from '../features/Map/duck';

export default () => combineReducers({
  map: map.reducer,
});