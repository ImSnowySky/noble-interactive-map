import React from 'react';
import { MapContainer, CurrentMap } from './elements';
import mockMap from './assets/test.png';
import Points from '../../Points';

class MapView extends React.Component {
  containerRef = React.createRef();

  startScrollWithMouse = e => {
    const { changeScrolling, changePosition } = this.props;
    e.preventDefault();
    changeScrolling(true);
    changePosition(e.screenX, e.screenY);
  }

  stopScrollWithMouse = e => {
    const { changeScrolling } = this.props;
    e.preventDefault();
    changeScrolling(false);
  }

  calculateMouseCoords = e => {
    const { changeCurrentMousePosition, zoom } = this.props;
    const { containerRef } = this;

    if (containerRef && containerRef.current) {
      const { current: map } = containerRef;
      const { screenX, screenY } = e;
      changeCurrentMousePosition(
        Math.floor((screenX + map.scrollLeft) / zoom),
        Math.floor((screenY + map.scrollTop) / zoom)
      );
    }
  }

  scrollMapWithMosue = e => {
    const { scrolling, x, y, changePosition } = this.props;
    const { screenX: newX, screenY: newY } = e;
    const diff = { x: newX - x,  y: newY - y };
    if (!scrolling) return;
  
    if (this.containerRef && this.containerRef.current) {
      const { current: map } = this.containerRef;
      map.scroll(map.scrollLeft - diff.x, map.scrollTop - diff.y);
    }
    changePosition(newX, newY);
  }

  doWorkWithMouse = (e) => {
    e.preventDefault();
    this.calculateMouseCoords(e);
    this.scrollMapWithMosue(e);
  }

  zoomWithWheel = e => {
    e.preventDefault();
    const { deltaY: delta } = e;
    const { zoom, changeZoom } = this.props;
    const newZoom = zoom - delta / 2000;
    if (newZoom > 0.65 && newZoom < 2) {
      changeZoom(newZoom);
    }
  }

  componentDidMount() {
    if (this.containerRef && this.containerRef.current) {
      const { current: map } = this.containerRef;
      map.addEventListener('mousedown', this.startScrollWithMouse);
      map.addEventListener('mouseup', this.stopScrollWithMouse);
      map.addEventListener('mousemove', this.doWorkWithMouse);
      map.addEventListener('wheel', this.zoomWithWheel);
      map.addEventListener('mouseleave', this.stopScrollWithMouse);
    }
  }

  componentWillUnmount() {
    if (this.containerRef && this.containerRef.current) {
      const { current: map } = this.containerRef;
      map.removeEventListener('mousedown', this.startScrollWithMouse);
      map.removeEventListener('mouseup', this.stopScrollWithMouse);
      map.removeEventListener('mousemove', this.doWorkWithMouse);
      map.removeEventListener('wheel', this.zoomWithWheel);
      map.removeEventListener('mouseleave', this.stopScrollWithMouse);
    }
  }

  render() {
    const { scrolling, zoom, map, changeWatchForMouse, changeCurrentMousePosition } = this.props;
    return (
      <MapContainer
        ref = {this.containerRef}
        draggable = "true"
        scrolling = {scrolling}
        onMouseEnter = {() => changeWatchForMouse(true)}
        onMouseLeave = {() => {
          changeWatchForMouse(false);
          changeCurrentMousePosition(null, null);
        }}
      >
        <CurrentMap
          src = { window.location.href.includes('localhost') ? mockMap : map ? map.map : null }
          zoom = {zoom}
        />
        <Points />
      </MapContainer>
    )
  }
}

export default MapView;