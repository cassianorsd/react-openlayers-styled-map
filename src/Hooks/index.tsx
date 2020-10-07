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
