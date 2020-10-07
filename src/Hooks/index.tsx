import { Map, View } from 'ol';
import React from 'react';
import 'ol/ol.css';
import BaseLayer from 'ol/layer/Base';
import globalHook, { Store } from 'use-global-hook';

interface GlobalMapState {
  map: Map;
  activeMenuControl: string | undefined;
}

type MapStore = Store<GlobalMapState, GlobalMapActions>;

export interface AddLayerProps {
  layerKey: string;
  layerObject: BaseLayer;
}

export interface RemoveLayerProps {
  layerKey?: string;
  layerObject?: BaseLayer;
}

interface GlobalMapActions {
  initMap: (initMapProps: InitMapProps) => void;
  addLayer: (addLayerProps: AddLayerProps) => void;
  removeLayer: (removeLayerProps: RemoveLayerProps) => void;
  getLayer: (layerKey: string) => BaseLayer | undefined;
  setActiveMenuControl: (controlKey: string | undefined) => void;
}

export interface InitMapProps {
  id: string;
}
const initMap = (store: MapStore, { id }: InitMapProps): void => {
  const el = document.getElementById(id);
  if (el) store.state.map.setTarget(el);
};

const setActiveMenuControl = (
  store: MapStore,
  controlKey: string | undefined
): void => {
  store.setState({ ...store.state, activeMenuControl: controlKey });
};

const addLayer = (
  store: MapStore,
  { layerKey, layerObject }: AddLayerProps
): void => {
  layerObject.set('layerKey', layerKey);
  store.actions.removeLayer({ layerKey });
  store.state.map.addLayer(layerObject);
};

const removeLayer = (
  store: MapStore,
  { layerKey, layerObject }: AddLayerProps
): void => {
  if (layerObject) {
    store.state.map.removeLayer(layerObject);
  } else if (layerKey) {
    store.state.map
      .getLayers()
      .getArray()
      .filter((layer: BaseLayer) => layer.get('layerKey') === layerKey)
      .forEach((layer) => store.state.map.removeLayer(layer));
  }
};

const getLayer = (store: MapStore, layerKey: string): BaseLayer | undefined => {
  const layer = store.state.map
    .getLayers()
    .getArray()
    .find((layer: BaseLayer) => layer.get('layerKey') === layerKey);
  return layer || undefined;
};

const initialGlobalMapState: GlobalMapState = {
  map: new Map({
    target: undefined,
    layers: [],
    view: new View({
      center: [0, 0],
      zoom: 2,
    }),
    controls: [],
  }),
  activeMenuControl: undefined,
};
const globalActions = {
  initMap,
  addLayer,
  removeLayer,
  getLayer,
  setActiveMenuControl,
};
const useGlobalMap = globalHook<GlobalMapState, GlobalMapActions>(
  React,
  initialGlobalMapState,
  globalActions
);

// interface MapContextProps {
//   map: Map;
//   setTarget: (id: string) => void;
//   addLayer: (data: AddLayerProps) => void;
//   removeLayer: (data: RemoveLayerProps) => void;
//   getLayer: (layerKey: string) => BaseLayer | undefined;
//   activeMenuControl: string | undefined;
//   setActiveMenuControl: (key: string | undefined) => void;
// }

// const MapContext = React.createContext<MapContextProps | undefined>(undefined);

// const MapProvider: React.FC = ({ children }) => {
//   const [map] = useState<Map>(
//     new Map({
//       layers: [],
//       view: new View({
//         center: [0, 0],
//         zoom: 2,
//       }),
//       controls: [],
//     })
//   );

//   const [activeMenuControl, setActiveMenuControl] = useState<
//     string | undefined
//   >(undefined);
//   const setTarget = useCallback(
//     (id) => {
//       map.setTarget(id);
//     },
//     [map]
//   );

//   const removeLayer = useCallback(
//     ({ layerKey, layerObject }: RemoveLayerProps): void => {
//       if (layerObject) {
//         map.removeLayer(layerObject);
//       } else if (layerKey) {
//         map
//           .getLayers()
//           .getArray()
//           .filter((layer: BaseLayer) => layer.get('layerKey') === layerKey)
//           .forEach((layer) => map.removeLayer(layer));
//       }
//     },
//     [map]
//   );

//   const addLayer = useCallback(
//     ({ layerKey, layerObject }: AddLayerProps): void => {
//       layerObject.set('layerKey', layerKey);
//       removeLayer({ layerKey });
//       map.addLayer(layerObject);
//     },
//     [map, removeLayer]
//   );

//   const getLayer = useCallback(
//     (layerKey: string): BaseLayer | undefined => {
//       if (!map) return undefined;
//       const layer = map
//         .getLayers()
//         .getArray()
//         .find((layer: BaseLayer) => layer.get('layerKey') === layerKey);
//       return layer || undefined;
//     },
//     [map]
//   );

//   return (
//     <MapContext.Provider
//       value={{
//         map,
//         setTarget,
//         addLayer,
//         removeLayer,
//         activeMenuControl,
//         setActiveMenuControl,
//         getLayer,
//       }}
//     >
//       {children}
//     </MapContext.Provider>
//   );
// };

export type UseMapProps = GlobalMapState & GlobalMapActions;

function useMap(): UseMapProps {
  // const context = useContext(MapContext);
  const [store, actions] = useGlobalMap();
  // if (!context) {
  //   throw new Error('useMap must be used within a GeoProvider');
  // }
  return {
    // ...context,
    initMap: actions.initMap,
    map: store.map,
    addLayer: actions.addLayer,
    removeLayer: actions.removeLayer,
    getLayer: actions.getLayer,
    activeMenuControl: store.activeMenuControl,
    setActiveMenuControl: actions.setActiveMenuControl,
  };
}
export {
  // MapProvider,
  useMap,
  //  MapContext,
  useGlobalMap,
};
