import React from 'react';
import { NavBarContainer, LayoutContainer, MenuButton } from './styles';

const Layout: React.FC = ({ children }) => {
  return (
    <LayoutContainer>
      <NavBarContainer>
        <MenuButton to='/'>Map</MenuButton>
        <MenuButton to='/blank'>Blank</MenuButton>
        <MenuButton to='/multi'>Multiple Maps</MenuButton>
        <MenuButton to='/map-debug'>Debug</MenuButton>
      </NavBarContainer>
      {children}
    </LayoutContainer>
  );
};

export default Layout;
