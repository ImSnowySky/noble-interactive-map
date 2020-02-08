import React from 'react';
import { Icon, DescriptionContainer, Title, Description } from './elements';

const Point = ({ zoom, icon, x, y, name, description }) => {
  console.log(x, y);
  return (
  <Icon zoom = {zoom} icon = {icon} x = {x} y = {y}>
    {
      name || description
        ? <DescriptionContainer zoom = {zoom}>
            {name && <Title>{name}</Title> }
            {description && <Description>{description}</Description>}
          </DescriptionContainer>
        : null
    }
  </Icon>
  )
}

export default Point;