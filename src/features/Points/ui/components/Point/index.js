import React from 'react';
import { Icon, DescriptionContainer, Title, Description } from './elements';

class Point extends React.Component {
  render() {
    return <Icon
      zoom = {this.props.zoom}
      icon = {this.props.icon}
      left = {this.props.x}
      top = {this.props.y}
    >
      {
        this.props.name || this.props.description
          ?  <DescriptionContainer zoom = {this.props.zoom}>
              {this.props.name && <Title>{this.props.name}</Title> }
              {this.props.description && <Description>{this.props.description}</Description>}
            </DescriptionContainer>
          : null
      }
    </Icon>
  }
}

export default Point;