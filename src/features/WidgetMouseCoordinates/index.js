import React from 'react';
import { connect } from 'react-redux';
import { MouseCoordinatesContainer, MouseCoordinate } from './elements';

const mapStateToProps = state => ({
  x: state.map.currentMouseX,
  y: state.map.currentMouseY,
  zoom: state.map.zoom,
});

const WidgetMouseCoordinates = ({ x, y, zoom }) =>
  x && y
    ? <MouseCoordinatesContainer>
        <MouseCoordinate>X: {x}, Y: {y}, zoom: {zoom.toFixed(2)}</MouseCoordinate>
      </MouseCoordinatesContainer>
    : null;

export default connect(mapStateToProps)(WidgetMouseCoordinates);