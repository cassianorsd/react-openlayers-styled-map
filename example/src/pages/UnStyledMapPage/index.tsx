import React from 'react'
import { StyledMap,Controls } from 'react-openlayers-styled-map'
import 'react-openlayers-styled-map/dist/index.css'
import Layout from '../../components/Layout'
import { Content } from './styles'


const UnStyledMapPage:React.FC = ()=>{
  return (
  <Layout>
    <Content>
      <StyledMap
        osmBasemap
        defaultControls={{
          fullScreenMode:{},
          scale:{bar:true,minWidth:100},
          zoomButtons:{},
          zoomSlider:{}
        }}
        startCoordinates={[-49.20,-26.50]}
        startZoom={11}
      >
        <StyledMap.Controls showRibbon={false} >
          <Controls.GoogleStreetView />
          <Controls.ExportMapImage  />
          <Controls.ExportMapPDF  />
          <Controls.MeasureArea  />
          <Controls.MeasureDistance  />
          <Controls.MeasureRadius  />
          <Controls.ClearMeasures  />
          <Controls.PinCoordinates  />
        </StyledMap.Controls>
      </StyledMap>
    </Content>
  </Layout>
  )
}

export default UnStyledMapPage