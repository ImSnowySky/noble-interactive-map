import styled from 'styled-components';
import grid from './assets/grid.jpg';

export const MapContainer = styled.div`
  position: absolute;
  top: 64px;
  left: 0;
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: calc(100% - 64px);
  z-index: 5;
  overflow: hidden;
  pointer-events: all;
  cursor: ${({ scrolling }) => scrolling ? 'grabbing' : 'grab'};
  background-image: url(${grid});
  background-size: 48px;
  background-repeat: repeat;
`;

export const CurrentMap = styled.img`
  display: block;
  height: ${({ zoom = 1 }) => `calc(1600px * ${zoom})`};
  position: absolute;
  top: 0;
  left: 0;
`;