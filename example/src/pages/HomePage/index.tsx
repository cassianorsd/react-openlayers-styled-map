import React from 'react'
import { StyledMap,Controls } from 'react-openlayers-styled-map'
import Layout from '../../components/Layout'
import { Content } from './styles'


const HomePage:React.FC = ()=>{
  return (
  <Layout>
    <Content>
      <StyledMap
        debugOptions={{osmBasemap:true}}
        id='map1'
        defaultControls={{
          fullScreenMode:{},
          scale:{bar:true,minWidth:100},
          zoomButtons:{},
          zoomSlider:{}
        }}
        startCoordinates={[-49.20,-26.50]}
        startZoom={11}
      >
        <StyledMap.Controls showRibbon >
          <Controls.GoogleStreetView styled/>
          <Controls.ExportMapImage  styled/>
          <Controls.ExportMapPDF  styled/>
          <Controls.MeasureArea styled />
          <Controls.MeasureDistance styled />
          <Controls.MeasureRadius styled />
          <Controls.ClearMeasures styled />
          <Controls.PinCoordinates styled/>
          <Controls.CurrentLocation styled />
        </StyledMap.Controls>
      </StyledMap>
    </Content>
  </Layout>
  )
}

export default HomePage