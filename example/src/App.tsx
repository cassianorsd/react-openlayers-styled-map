import React from 'react'

import { StyledMap } from 'react-openlayers-map'
import 'react-openlayers-map/dist/index.css'

const App = () => {
  return <div style={{ display: 'flex' }}>
    <StyledMap
      id='map1'
      height={500}
      width={500}
      osmBasemap

      defaultControls={{
        fullScreenMode: {},
        zoomButtons: true,
        zoomSlider: true,
        scale: {
          type: 'bar',
          units: 'metric',
          steps: 4
        }
      }}
      controlsMenu={{ streetView: { activeLabel: 'Street View' } }}
    />
  </div>
}

export default App
