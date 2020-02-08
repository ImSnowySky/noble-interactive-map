import React from 'react';
import { HeaderContainer, BackButton, LogoContainer, SubnameContainer } from './elements';
import Logo from '../shared/Logo';
import backIcon from './assets/back.svg';

class Sidebar extends React.Component {
  state = { opened: true };

  render() {
    return <HeaderContainer>
      <BackButton>
        <img src = {backIcon} alt = 'back' />
      </BackButton>
      <LogoContainer>
        <a href = 'http://noblegarden.club'><Logo /></a>
      </LogoContainer>
      <SubnameContainer>Интерактивная карта локаций</SubnameContainer>
    </HeaderContainer>
  }
}

export default Sidebar;