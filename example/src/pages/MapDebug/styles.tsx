import { isMobile } from 'react-device-detect';
import styled from 'styled-components'


export const Content = styled.div`
  height:100%;
  width:100%;
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
`;


export const MapContainer = styled.section`
  height:${isMobile ? '90%' : '100%'};
  box-sizing:border-box;
  margin-left:auto;
  margin-right:auto;
  min-width:320px;
  flex-grow:2;
`;

export const SidebarContainer = styled.section`
  height:100%;
  box-sizing:border-box;
  width:300px;
  border-left:2px solid black;
`;
