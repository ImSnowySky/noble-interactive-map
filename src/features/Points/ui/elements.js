import styled from 'styled-components';

export const PointsContainer = styled.div`
  display: block;
  height: ${({ zoom = 1 }) => `calc(1600px * ${zoom})`};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;