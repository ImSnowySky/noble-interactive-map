import React from 'react';
import MapView from './ui';
import * as duck from './duck';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  zones: state.map.zones,
  locations: state.map.locations,
  points: state.map.points
});

const mapDispatchToProps = dispatch => bindActionCreators(duck.actions, dispatch);

class Map extends React.Component {
  componentDidMount() {
    const { getZones, getLocations, getPoints } = this.props;
    Promise.all([
      getZones(),
      getLocations(),
      getPoints(),
    ]);
  }
  render() {
    console.log(this.props);
    return <MapView />
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);