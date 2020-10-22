import React from 'react'
import { NavBarContainer,LayoutContainer,MenuButton } from './styles'



const Layout: React.FC = ({children}) => {
  return (
  <LayoutContainer>
    <NavBarContainer>
      <MenuButton to='/'>
        Simple Map
      </MenuButton>
      <MenuButton to='/blank'>
        Blank Page
      </MenuButton>
      <MenuButton to='/multi'>
        Multiple Maps
      </MenuButton>
      <MenuButton to='/map-debug'>
        Map Debug
      </MenuButton>
    </NavBarContainer>
    {children}
  </LayoutContainer>
  )
}

export default Layout