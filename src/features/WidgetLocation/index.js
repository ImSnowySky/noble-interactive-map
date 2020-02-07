import React from 'react';
import { connect } from 'react-redux';
import { Widget, Title } from './elements';

const mapStateToProps = state => ({
  zones: state.app.zones,
  currentZone: state.app.currentZone,
  locations: state.app.locations,
});

class WidgetLocationContainer extends React.Component {
  render() {
    const { zones, locations, currentZone } = this.props;
    if (!zones) return null;    
    return (
      <Widget>
        <Title>Зона</Title>
        <select defaultValue = {currentZone} value = {currentZone}>
          {
            zones.map(
              zone => (
                <option value = {zone.id} key = {zone.id}>
                  {zone.name}
                </option>
              )
            )
          }
        </select>
      </Widget>
    );
  }
}

export default connect(mapStateToProps)(WidgetLocationContainer);