import styled from 'styled-components';

export const MapContainer = styled.div`
  position: absolute;
  top: 0;
  left: 260px;
  display: flex;
  justify-content: center;
  align-content: center;
  width: calc(100% - 260px);
  height: 100%;
  z-index: 5;
  overflow: hidden;
  pointer-events: all;
  cursor: ${({ scrolling }) => scrolling ? 'grabbing' : 'grab'};
`;

export const CurrentMap = styled.img`
  display: block;
  height: ${({ zoom = 1 }) => `calc(1200px * ${zoom})`};
`;