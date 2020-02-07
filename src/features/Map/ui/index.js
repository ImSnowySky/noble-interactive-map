import React from 'react';
import { MapContainer, CurrentMap } from './elements';
import map from './assets/test.png';

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

  scrollWithMouse = (e) => {
    const { scrolling, x: currentX, y: currentY, changePosition } = this.props;
    e.preventDefault(); 
    if (!scrolling) return;
    const { screenX: newX, screenY: newY } = e;
    const diff = {
      x: newX - currentX,
      y: newY - currentY,
    };


    if (this.containerRef && this.containerRef.current) {
      const { current: map } = this.containerRef;
      map.scroll(map.scrollLeft - diff.x, map.scrollTop - diff.y);
    }

    changePosition(newX, newY);
  }

  zoomWithWheel = e => {
    e.preventDefault();
    const { deltaY: delta } = e;
    const { zoom, changeZoom } = this.props;
    const newZoom = zoom - delta / 2000;
    if (newZoom > 0.75 && newZoom < 1.5) {
      changeZoom(newZoom);
    }
  }

  componentDidMount() {
    if (this.containerRef && this.containerRef.current) {
      const { current: map } = this.containerRef;
      map.addEventListener('mousedown', this.startScrollWithMouse);
      map.addEventListener('mouseup', this.stopScrollWithMouse);
      map.addEventListener('mousemove', this.scrollWithMouse);
      map.addEventListener('wheel', this.zoomWithWheel);
    }
  }

  render() {
    const { scrolling, zoom } = this.props;
    return <MapContainer ref = {this.containerRef} draggable = "true" scrolling = {scrolling}>
      <CurrentMap src = {map} zoom = {zoom}/>
    </MapContainer>
  }
}

export default MapView;