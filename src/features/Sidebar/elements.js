import styled from 'styled-components';
import colors from '../../helpers/colors';

export const SidebarContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 260px;
  height: 100%;
  background: ${colors.dark};
  box-shadow: 0 10px 10px black;
  z-index: 10;
`;

export const LogoContainer = styled.div`
  width: 100%;
  height: 36px;
  margin-top: 24px;

  a {
    display: block;
    width: 196px;
    margin: 0 auto;
  }
`;

export const SubnameContainer = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 8px;
  color: #fff;
  font-size: 14px;
  line-height: 24px;
`;