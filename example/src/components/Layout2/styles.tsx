import styled from 'styled-components'
import {lighten} from 'polished'
import { Link } from 'react-router-dom';
import ThemePallete from '../../config/ThemePallete';


export const LayoutContainer = styled.div`
  height:100vh;
  display:flex;
  flex-direction:column;
  justify-content:stretch;
  align-items:stretch;
`;

export const NavBarContainer = styled.div`
  background-color:${ThemePallete.darkBlue};
  height: 35px;
  display:flex;
  flex-wrap:wrap;
  justify-content:flex-start;
  align-items:center;
  padding: 0px 10px 0px;
`;


export const MenuButton = styled(Link)`
  user-select:none;
  text-decoration:none;
  color:#000;
  background-color: ${lighten(0.3,ThemePallete.darkBlue)};
  border-radius:5px;
  padding: 3px 10px 3px;
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  align-items:center;
  & + a {
    margin-left:10px;
  }
  transition: background-color 300ms ease;
  &:hover {
    cursor:pointer;
    background-color: ${lighten(0.5,ThemePallete.darkBlue)}
  }

`;