import React from 'react'

import { StyledMap, Controls } from 'react-openlayers-map'
import 'react-openlayers-map/dist/index.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blank">Blank</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/blank">
          This is a blank page to test remount of map component
          </Route>
        <Route path="/">
          <div style={{ display: 'flex' }}>
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
              controlsMenu={{
                styled: true, children: (
                  <>
                    <Controls.GoogleStreetView styled activeLabel='Street View' />
                    <Controls.ExportMapImage styled />
                    <Controls.ExportMapPDF styled />
                  </>
                )
              }}
              theme={{
                colors: {
                  color1: '#036d19',
                  color2: '#B5CC18',
                  color3: '#0081a7',
                  color4: '#1E90FF',
                  color5: '#FE2C54',
                  color6: '#FFA500',
                  color7: '#f9d423',
                  color8: '#9ACD32',
                }
              }}
            />
          </div>
        </Route>

      </Switch>
    </Router>
  )
}

export default App
