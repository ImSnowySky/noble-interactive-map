import React from 'react';
import { MapContainer, CurrentMap } from './elements';
import map from './assets/test.png';

class Map extends React.Component {
  containerRef = React.createRef();
  state = { isScrolling: false, currentX: 0, currentY: 0, zoom: 1 };

  startScrollWithMouse = (e) => {
    e.preventDefault();
    this.setState({
      isScrolling: true,
      currentX: e.screenX,
      currentY: e.screenY,
    });
  }

  stopScrollWithMouse = (e) => {
    e.preventDefault();
    this.setState({ isScrolling: false });
  }

  scrollWithMouse = (e) => {
    e.preventDefault(); 
    const { isScrolling, currentX, currentY } = this.state;
    if (!isScrolling) return;
    const { screenX: newX, screenY: newY } = e;
    const diff = {
      x: newX - currentX,
      y: newY - currentY,
    };


    if (this.containerRef && this.containerRef.current) {
      const { current: map } = this.containerRef;
      map.scroll(map.scrollLeft - diff.x, map.scrollTop - diff.y);
    }
    this.setState({ currentX: newX, currentY: newY });
  }

  zoomWithWheel = (e) => {
    e.preventDefault();
    const { deltaY: delta } = e;
    const newZoom = this.state.zoom - delta / 2000;
    if (newZoom > 0.75 && newZoom < 1.5) {
      this.setState({ zoom: newZoom });
    }
  }

  componentDidMount() {
    if (this.containerRef && this.containerRef.current) {
      const { current: map } = this.containerRef;
      map.addEventListener('mouseup', this.stopScrollWithMouse);
      map.addEventListener('mousemove', this.scrollWithMouse);
      map.addEventListener('mousedown', this.startScrollWithMouse);
      map.addEventListener('wheel', this.zoomWithWheel);
    }
  }

  render() {
    const { isScrolling, zoom } = this.state;
    return <MapContainer ref = {this.containerRef} draggable = "true" scrolling = {isScrolling}>
      <CurrentMap src = {map} zoom = {zoom}/>
    </MapContainer>
  }
}

export default Map;