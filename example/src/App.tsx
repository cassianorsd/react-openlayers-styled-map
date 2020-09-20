import React from 'react'

import { StyledMap } from 'react-openlayers-map'
import 'react-openlayers-map/dist/index.css'

const App = () => {
  return <div style={{ display: 'flex' }}>
    <StyledMap
      id='map1'
      height={800}
      width={800}
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
      controlsMenu={{ streetView: { activeLabel: 'Street View' }, exportImage: {} }}
      theme={{
        colors: {
          color1: '#036d19',
          color2: '#B5CC18',
          color3: '#0081a7',
          color4: '#1E90FF',
          color5: '#FE2C54',
          color6: '#FFA500',
          color7: '#f9d423',
        }
      }}
    />
  </div>
}

export default App
