import React from 'react'
import { StyledMap,Controls } from 'react-openlayers-styled-map'
import 'react-openlayers-styled-map/dist/index.css'
import Layout from '../../components/Layout'
import { Content } from './styles'


const MultiMapsPage:React.FC = ()=>{
  return (
  <Layout>
    <Content>
      <div style={{width:'500px',height:'500px'}}>
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
      </div>
      <div style={{width:'500px',height:'500px'}}>
      <StyledMap
        debugOptions={{osmBasemap:true}}
        id='map2'
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
          <Controls.GoogleStreetView styled={false}/>
          <Controls.ExportMapImage  styled={false}/>
          <Controls.ExportMapPDF  styled={false}/>
          <Controls.MeasureArea styled={false} />
          <Controls.MeasureDistance styled={false} />
          <Controls.MeasureRadius styled={false} />
          <Controls.ClearMeasures styled={false} />
          <Controls.PinCoordinates styled={false}/>
          <Controls.CurrentLocation styled={false} />
        </StyledMap.Controls>
      </StyledMap>
      </div>
      <div style={{width:'500px',height:'500px'}}>
      <StyledMap
        debugOptions={{osmBasemap:true}}
        id='map3'
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
          <Controls.GoogleStreetView styled={false}/>
          <Controls.ExportMapImage  styled={false}/>
          <Controls.ExportMapPDF  styled={false}/>
          <Controls.MeasureArea styled={false} />
          <Controls.MeasureDistance styled={false} />
          <Controls.MeasureRadius styled={false} />
          <Controls.ClearMeasures styled={false} />
          <Controls.PinCoordinates styled={false}/>
          <Controls.CurrentLocation styled={false} />
        </StyledMap.Controls>
      </StyledMap>
      </div>
      <div style={{width:'500px',height:'500px'}}>
      <StyledMap
        debugOptions={{osmBasemap:true}}
        id='map4'
        defaultControls={{
          fullScreenMode:{},
          scale:{},
          zoomButtons:{},
          zoomSlider:{}
        }}
        startCoordinates={[-49.20,-26.50]}
        startZoom={11}
      >
        <StyledMap.Controls showRibbon={false} >
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
      </div>
    </Content>
  </Layout>
  )
}

export default MultiMapsPage