# react-openlayers-map

> Openlayers styled map components ported into react with hooks

[![NPM](https://img.shields.io/npm/v/react-openlayers-map.svg)](https://www.npmjs.com/package/react-openlayers-map) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-openlayers-map
```

## Usage

### Map Component
```tsx
import React, { Component } from 'react'

import { StyledMap, Controls } from 'react-openlayers-map'

const Page = () => {
  return (
            <StyledMap
              id='map1' // Optional, just in case of conflict with other components
              height='800px'
              width='800px'
              osmBasemap //Enable OSM Background for quick testing
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
  )
}
```

## License

MIT © [cassianorsd](https://github.com/cassianorsd)
