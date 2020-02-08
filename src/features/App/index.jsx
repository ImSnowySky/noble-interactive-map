import React from 'react';
import App from './ui';
import * as duck from './duck';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  pending: state.app.pending,
  zones: state.app.zones,
  locations: state.app.locations,
  points: state.app.points,
  currentZone: state.app.currentZone,
  currentLocation: state.app.currentLocation,
});

const mapDispatchToProps = dispatch => bindActionCreators(duck.actions, dispatch);

class AppContainer extends React.Component {
  componentDidMount() {
    const { getZones } = this.props;
    getZones();
  }

  componentDidUpdate(prevProps) {
    const { currentZone: prevZone, currentLocation: prevLocation } = prevProps;
    const { currentZone, currentLocation, getLocations, getPoints } = this.props;

    const isZoneChanged = currentZone && prevZone ? currentZone.id !== prevZone.id : true;
    const isLocationChanged = currentLocation && prevLocation ? currentLocation.id !== prevLocation.id : true;

    if (isZoneChanged) getLocations(currentZone);
    if (isLocationChanged) getPoints(currentLocation); 
  }

  render() {
    return <App pending = {this.props.pending} />
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);