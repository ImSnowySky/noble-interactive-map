import React from 'react';
import { PointsContainer } from './elements';
import Point from './components/Point';

const PointsView = ({ zoom = 1, points = [] }) => 
  <PointsContainer zoom = {zoom}>
    {
      points.map(({ id, icon, name, description, x, y }) =>
        <Point key = {id} icon = {icon} name = {name} description = {description} x = {x} y = {y} zoom = {zoom} />
      )
    }
  </PointsContainer>

export default PointsView;