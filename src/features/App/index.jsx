import React from 'react';
import App from './ui';
import * as duck from './duck';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  pending: state.app.pending,
  zones: state.app.zones,
  locations: state.app.locations,
  points: state.app.points
});

const mapDispatchToProps = dispatch => bindActionCreators(duck.actions, dispatch);

class AppContainer extends React.Component {
  componentDidMount() {
    const { getZones } = this.props;
    getZones();
  }

  render() {
    return <App pending = {this.props.pending} />
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);