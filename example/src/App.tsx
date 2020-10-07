import React from 'react'
import { StyledMap, Controls } from 'react-openlayers-styled-map'
// import 'react-openlayers-map/dist/index.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const App = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%', alignItems: 'center', flexDirection: 'column' }}>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blank">Blank Page</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/blank">
            This is a blank page to test unmount effect on map component.
          </Route>
          <Route path="/">
            <StyledMap
              id='map1'
              height='800px'
              width='800px'
              osmBasemap
              startCoordinates={[-49.20, -26.50]}
              startZoom={11}
              defaultControls={{
                fullScreenMode: { tipLabel: 'Click to toggle' },
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
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
