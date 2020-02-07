import styled from 'styled-components';

export const Widget = styled.div`
  position: absolute;
  top: 80px;
  left: 24px;
  width: 240px;
  background: rgb(200, 200, 200);
  box-shadow: 0 5px 15px black;
  z-index: 10;
  border-radius: 10px;
  padding: 16px 16px;

  select {
    width: 100%;
    height: 24px;
    font-size: 14px;
    margin: 4px 0 16px;
  }
`;

export const Title = styled.div`
  width: 100%;
  font-size: 16px;
  line-height: 24px;
  font-weight: bold;
`;