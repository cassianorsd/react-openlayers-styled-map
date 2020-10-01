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
              height='800px'
              width='800px'
              osmBasemap
              defaultControls={{
                fullScreenMode: true,
                zoomButtons: true,
                zoomSlider: {},
                scale: {
                  bar: true,
                  minWidth: 130,
                  steps: 4
                }
              }}
              controlsMenu={{
                styled: true, children: (
                  <>
                    <Controls.GoogleStreetView styled activeLabel='Street View' />
                    <Controls.ExportMapImage styled />
                    <Controls.ExportMapPDF styled />
                    <Controls.MeasureDistance styled activeLabel='Medir Distância' />
                    <Controls.MeasureArea styled activeLabel='Medir Área' />
                    <Controls.MeasureRadius styled />
                    <Controls.ClearMeasures styled />
                  </>
                )
              }}
            />
          </div>
        </Route>

      </Switch>
    </Router>
  )
}

export default App
