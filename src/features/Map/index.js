import React from 'react';
import MapView from './ui';
import * as duck from './duck';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  scrolling: state.map.scrolling,
  x: state.map.x,
  y: state.map.y,
  zoom: state.map.zoom,
});

const mapDispatchToProps = dispatch => bindActionCreators(duck.actions, dispatch);

const Map = props => <MapView {...props} />

export default connect(mapStateToProps, mapDispatchToProps)(Map);