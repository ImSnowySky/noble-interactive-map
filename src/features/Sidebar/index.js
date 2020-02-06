import React from 'react';
import { SidebarContainer, LogoContainer, SubnameContainer } from './elements';
import Logo from '../shared/Logo';

class Sidebar extends React.Component {
  state = { opened: true };

  render() {
    return <SidebarContainer>
      <LogoContainer>
        <a href = 'http://noblegarden.club'>
          <Logo />
        </a>
      </LogoContainer>
      <SubnameContainer>
        Интерактивная карта локаций
      </SubnameContainer>
    </SidebarContainer>
  }
}

export default Sidebar;