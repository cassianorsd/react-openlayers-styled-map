import { Map } from 'ol'
import { ScaleLine, ZoomSlider, Zoom, FullScreen } from 'ol/control'

export interface DefaultControlsProps {
  fullScreenMode?: { tipLabel?: string }
  zoomButtons?: true
  zoomSlider?: boolean
  scale?: {
    type: 'bar' | 'line'
    units: 'degrees' | 'imperial' | 'us' | 'nautical' | 'metric'
    steps?: number
  }
}

export interface AddDefaultControlsProps {
  map: Map
  defaultControls: DefaultControlsProps
}

const addDefaultControls = ({
  map,
  defaultControls
}: AddDefaultControlsProps): void => {
  if (defaultControls?.zoomSlider) map.addControl(new ZoomSlider())

  if (defaultControls?.scale) {
    let control: any
    switch (defaultControls.scale.type) {
      case 'bar':
        control = new ScaleLine({
          units: defaultControls.scale.units,
          bar: true,
          steps: defaultControls.scale.steps || 2
        })
        break
      default:
        control = new ScaleLine({
          units: defaultControls.scale.units
        })
        break
    }
    map.addControl(control)
  }

  if (defaultControls.zoomButtons) {
    map.addControl(new Zoom())
  }

  if (defaultControls.fullScreenMode) {
    map.addControl(
      new FullScreen({
        tipLabel:
          defaultControls?.fullScreenMode?.tipLabel || 'Click to full screen.'
      })
    )
  }
}

export default addDefaultControls
