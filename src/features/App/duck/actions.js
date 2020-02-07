import request from '../api';
import { bindActionCreators } from 'redux';
import { actionTypes } from './constants';
import createAsyncAction from '../../../helpers/create-async-action';

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
      if (result && result.length && result.length > 0) {
        zonesAction.success(result);
      } else zonesAction.success({ payload: [] });
    }
    catch (e) {
      zonesAction.failure(e);
    }
  }
}

export const getLocations = () => async dispatch => {
  const locationAction = bindActionCreators(getLocationsAction, dispatch);
  locationAction.started();

  try {
    const result = await request.locations();
    if (result && result.length && result.length > 0) {
      locationAction.success(result);
    } else locationAction.success({ payload: [] });
  }
  catch (e) {
    locationAction.failure(e);
  }
}


export const getPoints = () => async dispatch => {
  const pointAction = bindActionCreators(getPointsAction, dispatch);
  pointAction.started();

  try {
    const result = await request.points();
    if (result && result.length && result.length > 0) {
      pointAction.success(result);
    } else pointAction.success({ payload: [] });
  }
  catch (e) {
    pointAction.failure(e);
  }
}