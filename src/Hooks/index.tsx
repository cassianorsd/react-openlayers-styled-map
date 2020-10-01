import { Map, View } from 'ol';
import React, { useCallback, useContext, useState } from 'react';
import {
  ActiveLayersProps,
  AddLayerProps,
  MapContextProps,
  RemoveLayerProps,
} from './interfaces';
import 'ol/ol.css';
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
  const [activeLayers, setActiveLayers] = useState<ActiveLayersProps>({});
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
    ({ layerKey, layerObject }: RemoveLayerProps) => {
      setActiveLayers((prev) => {
        if (layerKey && layerKey in prev) {
          map.removeLayer(prev[layerKey]);
        }
        if (layerObject) {
          map.removeLayer(layerObject);
        }
        if (layerKey) {
          const layers = prev;
          delete layers[layerKey];
          return layers;
        }
        return prev;
      });
    },
    [map]
  );

  const addLayer = useCallback(
    ({ layerKey, layerObject }: AddLayerProps) => {
      setActiveLayers((prev) => {
        if (layerKey in prev) map.removeLayer(prev[layerKey]);
        map.addLayer(layerObject);
        return { ...prev, [layerKey]: layerObject };
      });
    },
    [map]
  );

  return (
    <MapContext.Provider
      value={{
        map,
        setTarget,
        activeLayers,
        addLayer,
        removeLayer,
        activeMenuControl,
        setActiveMenuControl,
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
