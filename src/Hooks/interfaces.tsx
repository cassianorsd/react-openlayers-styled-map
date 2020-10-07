// import { Map } from 'ol';
// import BaseLayer from 'ol/layer/Base';
// import { DefaultControlsProps } from '../StyledMap/functions/defaultControls';
// export interface AddLayerProps {
//   layerKey: string;
//   layerObject: BaseLayer;
// }

// export interface RemoveLayerProps {
//   layerKey?: string;
//   layerObject?: BaseLayer;
// }

export interface ActiveMenuControl {
  controlKey: string;
  enable: () => void;
  disable: () => void;
}

// export interface InitMapProps {
//   id: string;
//   defaultControls: DefaultControlsProps;
// }

// export interface MapContextProps {
//   map: Map;
//   setTarget: (id: string) => void;
//   // initMap: (initMapProps: InitMapProps) => void;
//   addLayer: (data: AddLayerProps) => void;
//   removeLayer: (data: RemoveLayerProps) => void;
//   getLayer: (layerKey: string) => BaseLayer | undefined;
//   activeMenuControl: string | undefined;
//   setActiveMenuControl: (key: string | undefined) => void;
// }
