import { Map } from 'ol';
import BaseLayer from 'ol/layer/Base';
import { SetStateAction } from 'react';

export interface AddLayerProps {
  layerKey: string;
  layerObject: BaseLayer;
}

export interface RemoveLayerProps {
  layerKey?: string;
  layerObject?: BaseLayer;
}

export interface ActiveLayersProps {
  [key: string]: BaseLayer;
}

export interface ActiveMenuControl {
  controlKey: string;
  enable: () => void;
  disable: () => void;
}

export interface MapContextProps {
  map: Map;
  setTarget: (id: string) => void;
  activeLayers: ActiveLayersProps | {};
  addLayer: (data: AddLayerProps) => void;
  removeLayer: (data: RemoveLayerProps) => void;
  activeMenuControl: string | undefined;
  setActiveMenuControl: (key: string | undefined) => void;
}
