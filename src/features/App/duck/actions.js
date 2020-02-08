import request from '../api';
import { bindActionCreators } from 'redux';
import { createAction } from 'redux-actions';
import { actionTypes } from './constants';
import createAsyncAction from '../../../helpers/create-async-action';

export const changeCurrentZone = createAction(
  actionTypes.CHANGE_CURRENT_ZONE, zone => zone
);

export const changeCurrentLocation = createAction(
  actionTypes.CHANGE_CURRENT_LOCATION, location => location
);

export const getZonesAction = createAsyncAction(actionTypes.GET_ZONES);
export const getLocationsAction = createAsyncAction(actionTypes.GET_LOCATIONS);
export const getPointsAction = createAsyncAction(actionTypes.GETPOINTS);

export const getZones = () => async dispatch => {
  const zonesAction = bindActionCreators(getZonesAction, dispatch);
  zonesAction.started();

  if (window.location.href.includes('localhost')) {
    zonesAction.success([{ id: 0, name: 'test', description: 'test' }]);    
  } else {
    try {
      const result = await request.zones();
      zonesAction.success(result);
    }
    catch (e) {
      zonesAction.failure(e);
    }
  }
}

export const getLocations = (zone) => async dispatch => {
  const locationAction = bindActionCreators(getLocationsAction, dispatch);
  locationAction.started();

  try {
    const result = await request.locations(zone.id);
    locationAction.success(result);
  }
  catch (e) {
    locationAction.failure(e);
  }
}


export const getPoints = (location) => async dispatch => {
  const pointAction = bindActionCreators(getPointsAction, dispatch);
  pointAction.started();

  try {
    const result = await request.points(location.id);
    pointAction.success(result);
  }
  catch (e) {
    pointAction.failure(e);
  }
}