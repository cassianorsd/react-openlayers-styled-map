import React from 'react'

import { StyledMap } from 'react-openlayers-map'
import 'react-openlayers-map/dist/index.css'

const App = () => {
  return <StyledMap height={500} width={500} osmBasemap />
}

export default App
