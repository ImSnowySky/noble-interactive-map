import styled from 'styled-components';
import colors from '../../../helpers/colors';
import preloader from './assets/loader.svg';

export const AppView = styled.div`
  position: absolute;
  top: 0;
  left: 0%;
  width: 100%;
  height: 100%;
  font-family: 'Open Sans', sans-serif;
`;

export const LoaderContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colors.dark};
`;

export const Loader = styled.div`
  width: 120px;
  height: 120px;
  margin-top: 0;
  background-image: url(${preloader});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
`;