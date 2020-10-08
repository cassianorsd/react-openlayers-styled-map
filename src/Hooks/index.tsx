import { Map, View } from 'ol';
import React from 'react';
import 'ol/ol.css';
import BaseLayer from 'ol/layer/Base';
import globalHook, { Store } from 'use-global-hook';
import { OSM } from 'ol/source';
import TileLayer from 'ol/layer/Tile';
import { fromLonLat } from 'ol/proj';
import { Control } from 'ol/control';

import ZoomSlider, {
  Options as ZoomSliderOptions,
} from 'ol/control/ZoomSlider';
import ScaleLine, { Options as ScaleLineOptions } from 'ol/control/ScaleLine';
import Zoom, { Options as ZoomOptions } from 'ol/control/Zoom';
import FullScreen, {
  Options as FullScreenOptions,
} from 'ol/control/FullScreen';
import { Coordinate } from 'ol/coordinate';

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

export interface ControlProps {
  fullScreenMode?: FullScreenOptions;
  zoomButtons?: ZoomOptions;
  zoomSlider?: ZoomSliderOptions;
  scale?: ScaleLineOptions;
}

export interface InitMapProps {
  id: string;
  startZoom?: number;
  startCoordinates: Coordinate;
  defaultControls?: {
    fullScreenMode?: FullScreenOptions;
    zoomButtons?: ZoomOptions;
    zoomSlider?: ZoomSliderOptions;
    scale?: ScaleLineOptions;
  };
  defaultOSMBasemap?: boolean;
}

const initMap = (
  store: MapStore,
  {
    id,
    startCoordinates,
    startZoom,
    defaultControls,
    defaultOSMBasemap,
  }: InitMapProps
): void => {
  if (store.state.map) {
    store.state.map.setTarget(undefined);
  }
  const el = document.getElementById(id);
  if (!el) return;
  const controls = [];
  if (defaultControls?.zoomButtons)
    controls.push(new Zoom(defaultControls.zoomButtons));
  if (defaultControls?.scale)
    controls.push(new ScaleLine(defaultControls.scale));
  if (defaultControls?.fullScreenMode)
    controls.push(new FullScreen(defaultControls.fullScreenMode));
  if (defaultControls?.zoomSlider)
    controls.push(new ZoomSlider(defaultControls.zoomSlider));

  // const styledMenuContainer = document.createElement('div');
  const styledMenuContainer = document.getElementById('StyledMenuV2');
  if (styledMenuContainer) {
    styledMenuContainer.id = 'styledMenuContainer';
    const styledMenuControl = new Control({ element: styledMenuContainer });
    controls.push(styledMenuControl);
  }

  const layers: BaseLayer[] = [];
  if (defaultOSMBasemap) layers.push(new TileLayer({ source: new OSM() }));
  const map = new Map({
    target: el,
    layers,
    view: new View({
      center: fromLonLat(startCoordinates),
      zoom: startZoom || 10,
    }),
    controls,
  });
  console.log('[MAP ENGINE] Started.');

  store.setState({ ...store.state, map });
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
        if (!store.state.map) return;
        store.state.map.removeLayer(layer);
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
