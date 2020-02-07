import styled from 'styled-components';
import colors from '../../helpers/colors';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 64px;
  background: ${colors.dark};
  box-shadow: 0 0 10px black;
  z-index: 10;
`;

export const BackButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  background: rgba(240, 240, 240, .8);
  border-radius: 50%;
  transition: background 250ms ease-in-out;
  margin: 0 8px;

  &:hover {
    background: rgba(240, 240, 240, 1);
    cursor: pointer;
  }

  img { 
    width: 8px;
    height: 8px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 190px;
  height: 100%;

  a {
    display: block;
    width: 190px;
    margin: 8px auto 0;
  }
`;

export const SubnameContainer = styled.div`
  color: #fff;
  font-size: 14px;
  line-height: 24px;
`;