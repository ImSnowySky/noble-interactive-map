import React from 'react';
import PointsView from './ui';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  zoom: state.map.zoom,
  points: state.app.points,
});

const PointsContainer = ({ zoom = 1, points = [] }) =>
  points ? <PointsView zoom = {zoom} points = {points} /> : null

export default connect(mapStateToProps)(PointsContainer);