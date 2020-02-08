import React from 'react';
import { PointsContainer } from './elements';
import Point from './components/Point';

class PointsView extends React.Component {
  render() {
    const { zoom, points } = this.props;
    return <PointsContainer zoom = {zoom}>
      {
        points.map(point =>
          <Point
            key = {point.id}
            icon = {point.icon}
            name = {point.name}
            description = {point.description}
            x = {point.x}
            y = {point.y}
            zoom = {zoom}
          />
        )
      }
    </PointsContainer>
  }
}

export default PointsView;