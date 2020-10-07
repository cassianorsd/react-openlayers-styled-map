# react-openlayers-styled-map

> Openlayers map component wrapped in react component with style and global hooks

[![NPM](https://img.shields.io/npm/v/react-openlayers-styled-map.svg)](https://www.npmjs.com/package/react-openlayers-styled-map) [![TypeScript Style Guide](https://img.shields.io/badge/code_style-typecript-brightgreen.svg)](https://www.typescriptlang.org/)
![NPM](https://img.shields.io/npm/l/react-openlayers-styled-map)

## Install

```bash
npm install --save react-openlayers-styled-map
//or
yarn add react-openlayers-styled-map

//ATTENTION
//react-openlayers-styled-map uses Openlayers (ol) package as peer dependency
npm install ol
yarn add ol
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
              startCoordinates={[-49.20, -26.50]}
              startZoom={11}
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
  return <div>My Sidebar Component</div>
}
```

#### Abstractions that comes with the library

```tsx

import { useMap } from 'react-openlayers-map'
const Component = () => {
  const = {
    getLayer,
    addLayer,
    removeLayer,
    setActiveMenuControl
    } = useMap();


  setActiveMenuControl('GoogleStreetView') // Remotely enable menu control
  setActiveMenuControl(undefined) // Disable all menu controls, this method triggers the onDisable method on the currently active control
  
  //addLayer method wraps around map.addLayer and register the objects in the activeLayers
  // for and easy to use access for custom management components Ex: like Layer Selectors or TreeViews
  addLayer({ 
    layerKey: 'layerUniqueName2',
    layerObject:new TileLayer({source: new OSM()})
    });
  console.log(getLayer('layerUniqueName2'))
  // {layerKey:'layerUniqueName2',layerObject:object}

  //remove layer from map
  removeLayer('layerUniqueName2')
}
```


## Custom Menu Control

You can create a new custom control just wrapping the default ControlButton component and point the enable/disable callbacks and a unique key.


```tsx
import React, { useCallback } from 'react';
import { Controls,useMap } from 'react-openlayers-map'
import { FaCrosshairs } from 'react-icons/fa';
import { toLonLat } from 'ol/proj';
import { MapBrowserEvent } from 'ol';

const PrintMapCoordinates: React.FC = () => {
  const { map } = useMap();

  const onMapClick = (e: MapBrowserEvent): void => {
    const coords = toLonLat(e.coordinate);
    alert(coords);
  };

  const onEnable = useCallback(() => {
    map.getViewport().style.cursor = 'crosshair';
    map.on('click', onMapClick);
  }, [map]);

  const onDisable = useCallback(() => {
    map.getViewport().style.cursor = '';
    map.un('click', onMapClick);
  }, [map]);

  return (
    <Controls.ControlButton
      styled
      icon={<FaCrosshairs size={20} color='#fff' />}
      activeLabel='Print Map Coordinates'
      color='#FE2C54'
      activeMenuControl={{
        controlKey: 'PrintMapCoordinates',
        disable: onDisable,
        enable: onEnable,
      }}
    />
  );
};
```

Usage


```tsx
<StyledMap
  // ...
  controlsMenu={{
    styled: true, children: (
      <>
        <PrintMapCoordinates />
      </>
    )
  }}
/>
```

## License

MIT © [cassianorsd](https://github.com/cassianorsd)
