import { Map } from 'ol'
import BaseLayer from 'ol/layer/Base'

export interface AddLayerProps {
  layerKey: string
  layerObject: BaseLayer
}

export interface RemoveLayerProps {
  layerKey?: string
  layerObject?: BaseLayer
}

export interface ActiveLayersProps {
  [key: string]: BaseLayer
}

export interface MapContextProps {
  map: Map
  setTarget: (id: string) => void
  activeLayers: ActiveLayersProps | {}
  addLayer: (data: AddLayerProps) => void
  removeLayer(data: RemoveLayerProps) => void
}

export interface DefaultControlsProps {
  zoomSlider?: boolean
}
