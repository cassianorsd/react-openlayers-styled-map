import { Map, View } from 'ol'
import React, { useCallback, useContext, useState } from 'react'
import {
  ActiveLayersProps,
  AddLayerProps,
  MapContextProps,
  RemoveLayerProps
} from './interfaces'
import 'ol/ol.css'
const MapContext = React.createContext<MapContextProps | undefined>(undefined)

const MapProvider: React.FC = ({ children }) => {
  const [map] = useState<Map>(
    new Map({
      layers: [],
      view: new View({
        center: [0, 0],
        zoom: 2
      }),
      controls: []
    })
  )
  const [activeLayers, setActiveLayers] = useState<ActiveLayersProps>({})
  const [activeMenuControl, setActiveMenuControl] = useState<string>('')

  const setTarget = useCallback(
    (id) => {
      map.setTarget(id)
    },
    [map]
  )

  const removeLayer = useCallback(
    ({ layerKey, layerObject }: RemoveLayerProps) => {
      if (layerKey && layerKey in activeLayers) {
        map.removeLayer(activeLayers[layerKey])
      }
      if (layerObject) {
        map.removeLayer(layerObject)
      }
      if (layerKey)
        setActiveLayers((previous) => {
          const layers = previous
          delete layers[layerKey]
          return layers
        })
    },
    [map, activeLayers]
  )
  const addLayer = useCallback(
    ({ layerKey, layerObject }: AddLayerProps) => {
      if (layerKey in activeLayers) removeLayer({ layerKey })
      map.addLayer(layerObject)
      setActiveLayers((prev) => ({ ...prev, [layerKey]: layerObject }))
    },
    [map, activeLayers, removeLayer]
  )

  return (
    <MapContext.Provider
      value={{
        map,
        setTarget,
        activeLayers,
        addLayer,
        removeLayer,
        activeMenuControl,
        setActiveMenuControl
      }}
    >
      {children}
    </MapContext.Provider>
  )
}

function useMap(): MapContextProps {
  const context = useContext(MapContext)
  if (!context) {
    throw new Error('useMap must be used within a GeoProvider')
  }
  return context
}
export { MapProvider, useMap }
