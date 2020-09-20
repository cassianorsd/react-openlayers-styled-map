import { DefaultControlsProps } from './functions/defaultControls'

export interface StyledMapProps {
  width?: number
  height?: number
  id?: string
  osmBasemap?: boolean
  defaultControls?: DefaultControlsProps
  controlsMenu?: {
    streetView?: {
      activeLabel?: string
      widthOnActive?: number
    }
  }
}
