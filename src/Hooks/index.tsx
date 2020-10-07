import { Map, View } from 'ol';
import React from 'react';
import 'ol/ol.css';
import BaseLayer from 'ol/layer/Base';
import globalHook, { Store } from 'use-global-hook';
import { fromLonLat } from 'ol/proj';
import addDefaultControls, {
  DefaultControlsProps,
} from '../StyledMap/functions/defaultControls';
import { OSM } from 'ol/source';
import TileLayer from 'ol/layer/Tile';
interface GlobalMapState {
  map: Map | undefined;
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
  startZoom?: number;
  startCoordinates?: [number, number];
  defaultControls?: DefaultControlsProps;
}

const initMap = (
  store: MapStore,
  { id, startZoom, startCoordinates, defaultControls }: InitMapProps
): void => {
  const el = document.getElementById(id);
  if (!el) return;
  const map = new Map({
    target: el,
    layers: [new TileLayer({ source: new OSM() })],
    view: new View({
      center: fromLonLat(startCoordinates || [0, 0]),
      zoom: startZoom || 10,
    }),
    controls: [],
  });
  store.setState({
    ...store.state,
    map,
  });
  if (defaultControls) {
    addDefaultControls({ map, defaultControls });
  }
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
  if (!store.state.map) return;
  layerObject.set('layerKey', layerKey);
  store.actions.removeLayer({ layerKey });
  store.state.map.addLayer(layerObject);
};

const removeLayer = (
  store: MapStore,
  { layerKey, layerObject }: AddLayerProps
): void => {
  if (!store.state.map) return;
  if (layerObject) {
    store.state.map.removeLayer(layerObject);
  } else if (layerKey) {
    store.state.map
      .getLayers()
      .getArray()
      .filter((layer: BaseLayer) => layer.get('layerKey') === layerKey)
      .forEach((layer) => {
        if (store.state.map) store.state.map.removeLayer(layer);
      });
  }
};

const getLayer = (store: MapStore, layerKey: string): BaseLayer | undefined => {
  if (!store.state.map) return;
  const layer = store.state.map
    .getLayers()
    .getArray()
    .find((layer: BaseLayer) => layer.get('layerKey') === layerKey);
  return layer || undefined;
};

const initialGlobalMapState: GlobalMapState = {
  map: undefined,
  // map: new Map({
  //   target: undefined,
  //   layers: [],
  //   view: new View({
  //     center: [0, 0],
  //     zoom: 2,
  //   }),
  //   controls: [],
  // }),
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

export type UseMapProps = GlobalMapState & GlobalMapActions;

function useMap(): UseMapProps {
  const [store, actions] = useGlobalMap();

  return {
    initMap: actions.initMap,
    map: store.map,
    addLayer: actions.addLayer,
    removeLayer: actions.removeLayer,
    getLayer: actions.getLayer,
    activeMenuControl: store.activeMenuControl,
    setActiveMenuControl: actions.setActiveMenuControl,
  };
}
export { useMap, useGlobalMap };
