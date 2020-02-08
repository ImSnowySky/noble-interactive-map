import React from 'react';
import { connect } from 'react-redux';
import { Widget, Title } from './elements';
import { bindActionCreators } from 'redux';
import * as duck from '../App/duck';

const mapStateToProps = state => ({
  zones: state.app.zones,
  currentZone: state.app.currentZone,
  locations: state.app.locations,
});

const mapDispatchToProps = dispatch => bindActionCreators(duck.actions, dispatch);

class WidgetLocationContainer extends React.Component {
  state = { top: 80, left: 24, moving: false, mouseX: 0, mouseY: 0 };
  wrapperRef = React.createRef();

  drag = e => {
    const { moving, mouseX, mouseY } = this.state;
    if (!moving) return;
    const { screenX: newX, screenY: newY } = e;
    const delta = {
      x: newX - mouseX,
      y: newY - mouseY,
    };

    const getNewLeftPosition = () => {
      if (this.state.left + delta.x > window.innerWidth - 280) return window.innerWidth - 280;
      else if (this.state.left + delta.x < 0) return 0;
      else return this.state.left + delta.x;
    }

    const getNewTopPosition = () => {
      if (this.state.top + delta.y > window.innerHeight - this.wrapperRef.current.offsetHeight) {
        return window.innerHeight - this.wrapperRef.current.offsetHeight;
      }
      else if (this.state.top + delta.y < 68) return 68;
      else return this.state.top + delta.y;
    }

    this.setState({
      mouseX: newX,
      mouseY: newY,
      left: getNewLeftPosition(),
      top: getNewTopPosition(),
    });
  }

  componentDidMount() {
    window.addEventListener('mousemove', this.drag)
  }

  onMouseDown = e => {
    this.setState({
      moving: true,
      mouseX: e.screenX,
      mouseY: e.screenY,
    });
  }

  onMouseUp = () => {
    this.setState({ moving: false });
  }

  onMouseLeave = () => {
    this.setState({ moving: false });
  }

  render() {
    const { top, left, moving } = this.state;
    const { zones, locations, currentZone, changeCurrentZone } = this.props;
    if (!zones) return null;    
    return (
      <Widget
        style = {{ top, left }}
        ref = {this.wrapperRef}
        onMouseDown = {this.onMouseDown}
        onMouseUp = {this.onMouseUp}
        onMouseLeave = {this.onMouseLeave}
        moving = {moving}
        onChange = {e => changeCurrentZone(e.target.value) }
      >
        <Title>Зона</Title>
        <select
          defaultValue = {currentZone}
          value = {currentZone}
          onMouseDown = { e => e.stopPropagation() }
        >
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

export default connect(mapStateToProps, mapDispatchToProps)(WidgetLocationContainer);