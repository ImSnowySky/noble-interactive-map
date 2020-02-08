import React from 'react';
import PointsView from './ui';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  zoom: state.map.zoom,
  points: state.app.points,
});


class PointsContainer extends React.Component {
  render() {
    const { zoom, points = []} = this.props;
    if (!points) return null;
    return (
      <PointsView zoom = {zoom} points = {points}/>
    )
  }
}

export default connect(mapStateToProps)(PointsContainer);