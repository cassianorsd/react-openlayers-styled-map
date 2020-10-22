import { Map } from 'ol';
import BaseLayer from 'ol/layer/Base';
import { createGlobalState } from 'react-hooks-global-state';

interface MapState {
  map?: Map;
  activeMenuControl: string | undefined;
}

interface MapStore {
  [key: string]: MapState;
}

interface MapGlobalState {
  maps: MapStore;
}

const { useGlobalState } = createGlobalState<MapGlobalState>({
  maps: {}
});

interface AddLayerProps {
  layerKey: string;
  layerObject: BaseLayer;
}
interface RemoveLayerProps {
  layerKey?: string;
  layerObject?: BaseLayer;
}
interface UseMapReturn {
  map?: Map;
  activeMenuControl: string | undefined;
  setActiveMenuControl: (key: string | undefined) => void;
  addLayer: (options: AddLayerProps) => void;
  removeLayer: (options: RemoveLayerProps) => void;
  getLayer: (layerKey: string) => BaseLayer | undefined;
}

function useMap(mapid: string): UseMapReturn {
  const [mapState, setMapState] = useGlobalState('maps');
  const { activeMenuControl, map } = mapState[mapid] || {};

  const setActiveMenuControl = (controlKey: string | undefined): void => {
    setMapState((prev) => ({
      ...prev,
      [mapid]: { ...prev[mapid], activeMenuControl: controlKey }
    }));
  };

  const removeLayer = ({ layerKey, layerObject }: RemoveLayerProps): void => {
    if (!map) return;
    if (layerObject) {
      map.removeLayer(layerObject);
    } else if (layerKey) {
      map
        .getLayers()
        .getArray()
        .filter((layer: BaseLayer) => layer.get('layerKey') === layerKey)
        .forEach((layer) => {
          if (!map) return;
          map.removeLayer(layer);
        });
    }
  };

  const getLayer = (layerKey: string): BaseLayer | undefined => {
    if (!map) return;
    const layer = map
      .getLayers()
      .getArray()
      .find((layer: BaseLayer) => layer.get('layerKey') === layerKey);
    return layer || undefined;
  };

  const addLayer = ({ layerKey, layerObject }: AddLayerProps): void => {
    if (!map) return;
    layerObject.set('layerKey', layerKey);
    removeLayer({ layerKey });
    map.addLayer(layerObject);
  };

  return {
    map,
    activeMenuControl,
    setActiveMenuControl,
    addLayer,
    removeLayer,
    getLayer
  };
}

interface UseMapRegisterReturn {
  registerMap: (mapid: string, map: Map) => void;
}

function useMapRegister(): UseMapRegisterReturn {
  const [, setState] = useGlobalState('maps');
  const registerMap = (mapid: string, map: Map): void => {
    if (!mapid) {
      throw new Error(
        `You must define a unique mapid on useMap
        or passing as option on registerMap`
      );
    }
    setState((prev) => ({
      ...prev,
      [mapid]: { map, activeMenuControl: undefined }
    }));
  };
  return {
    registerMap
  };
}

export { useMap, useMapRegister };
