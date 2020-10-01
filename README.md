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
              id='map' // Optional, just in case of conflict with other components
              height='800px'
              width='800px'
              osmBasemap //Enable OSM Background for quick testing
              defaultControls={{   
                // You can use boolean value or access Openlayers options for each default control as follow:
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
  )
}
```

### Hooks / Methods Abstractions

#### Access map object
```tsx

import { useMap } from 'react-openlayers-map'
const Sidebar = () => {
  const { map } = useMap();
  //map is the pure ol map object, so you can access all the power of the OpenLayers lib
  useEffect(()=>{
    map.addOverlay(...)
    map.addInteraction(...)
    map.addLayer(...)
    map.on('click',()=>{})
  },[])
  return <div>My Sidebar</div>
}
```

#### Abstraction that comes with the library

```tsx

import { useMap } from 'react-openlayers-map'
const Component = () => {
  const = {
    activeLayers,
    addLayer,
    removeLayer,
    setActiveMenuControl
    } = useMap();


  setActiveMenuControl('GoogleStreetView') // Remotely enable menu control
  setActiveMenuControl(undefined) // Disable all menu controls, this method triggers the onDisable method on the currently active control


  //addLayer method wraps around map.addLayer and register the objects in the activeLayers
  // for and easy to use access for custom management components Ex: like Layer Selectors or TreeViews
  addLayer('layerUniqueName2',new TileLayer({source: new OSM()})) 
  console.log(activeLayers)
  // {layerUniqueName1:layerObject, layerUniqueName2:layerObject}

  removeLayer('layerUniqueName2')
}
```



## License

MIT © [cassianorsd](https://github.com/cassianorsd)
