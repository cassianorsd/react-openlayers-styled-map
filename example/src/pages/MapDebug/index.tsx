import React from 'react'
import Layout from '../../components/Layout'
import { Content, MapContainer, SidebarContainer } from './styles'
import { StyledMap,Controls } from 'react-openlayers-styled-map'
import Sidebar from './Sidebar'



const MapDebug:React.FC = () => {
  return (
  <Layout>
    <Content>
      <MapContainer>
      <StyledMap
        defaultControls={{
          fullScreenMode:{},
          scale:{bar:true,minWidth:100},
          zoomButtons:{},
          zoomSlider:{}
        }}
        startCoordinates={[-69.20,10]}
        startZoom={4}
      >
        <StyledMap.Controls showRibbon >
          <Controls.GoogleStreetView styled/>
          <Controls.ExportMapImage styled />
          <Controls.ExportMapPDF styled />
          <Controls.MeasureArea styled />
          <Controls.MeasureDistance styled />
          <Controls.MeasureRadius styled />
          <Controls.ClearMeasures styled />
          <Controls.PinCoordinates styled />
        </StyledMap.Controls>
      </StyledMap>
      </MapContainer>
      <SidebarContainer>
        <Sidebar/>
      </SidebarContainer>
    </Content>
  </Layout>
  )
}


export default MapDebug