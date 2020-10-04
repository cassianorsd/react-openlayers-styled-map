import { Map, View } from 'ol';
import React, { useCallback, useContext, useState } from 'react';
import { AddLayerProps, MapContextProps, RemoveLayerProps } from './interfaces';
import 'ol/ol.css';
import BaseLayer from 'ol/layer/Base';
const MapContext = React.createContext<MapContextProps | undefined>(undefined);

const MapProvider: React.FC = ({ children }) => {
  const [map] = useState<Map>(
    new Map({
      layers: [],
      view: new View({
        center: [0, 0],
        zoom: 2,
      }),
      controls: [],
    })
  );
  const [activeMenuControl, setActiveMenuControl] = useState<
    string | undefined
  >(undefined);

  const setTarget = useCallback(
    (id) => {
      map.setTarget(id);
    },
    [map]
  );

  const removeLayer = useCallback(
    ({ layerKey, layerObject }: RemoveLayerProps): void => {
      if (layerObject) {
        map.removeLayer(layerObject);
      } else if (layerKey) {
        map
          .getLayers()
          .getArray()
          .filter((layer: BaseLayer) => layer.get('layerKey') === layerKey)
          .forEach((layer) => map.removeLayer(layer));
      }
    },
    [map]
  );

  const addLayer = useCallback(
    ({ layerKey, layerObject }: AddLayerProps): void => {
      layerObject.set('layerKey', layerKey);
      removeLayer({ layerKey });
      map.addLayer(layerObject);
    },
    [map, removeLayer]
  );

  const getLayer = useCallback(
    (layerKey: string): BaseLayer | undefined => {
      if (!map) return undefined;
      const layer = map
        .getLayers()
        .getArray()
        .find((layer: BaseLayer) => layer.get('layerKey') === layerKey);
      return layer || undefined;
    },
    [map]
  );

  return (
    <MapContext.Provider
      value={{
        map,
        setTarget,
        addLayer,
        removeLayer,
        activeMenuControl,
        setActiveMenuControl,
        getLayer,
      }}
    >
      {children}
    </MapContext.Provider>
  );
};

function useMap(): MapContextProps {
  const context = useContext(MapContext);
  if (!context) {
    throw new Error('useMap must be used within a GeoProvider');
  }
  return context;
}
export { MapProvider, useMap };
