import { Map } from 'ol';
import { ScaleLine, ZoomSlider, Zoom, FullScreen } from 'ol/control';
import { Options as ZoomSliderOptions } from 'ol/control/ZoomSlider';
import { Options as ScaleLineOptions } from 'ol/control/ScaleLine';
import { Options as ZoomOptions } from 'ol/control/Zoom';
import { Options as FullScreenOptions } from 'ol/control/FullScreen';

export interface DefaultControlsProps {
  fullScreenMode?: FullScreenOptions | boolean;
  zoomButtons?: ZoomOptions | boolean;
  zoomSlider?: ZoomSliderOptions | boolean;
  scale?: ScaleLineOptions | boolean;
}

export interface AddDefaultControlsProps {
  map: Map;
  defaultControls: DefaultControlsProps;
}

const addDefaultControls = ({
  map,
  defaultControls,
}: AddDefaultControlsProps): void => {
  if (defaultControls?.zoomSlider) {
    let opt = {};
    if (typeof defaultControls.zoomSlider !== 'boolean') {
      opt = defaultControls.zoomSlider;
    }
    map.addControl(new ZoomSlider(opt));
  }

  if (defaultControls?.scale) {
    let opt: ScaleLineOptions = {
      bar: true,
      units: 'metric',
      steps: 4,
    };
    if (typeof defaultControls.scale !== 'boolean') {
      opt = defaultControls.scale;
    }
    const scaleControl = new ScaleLine(opt);
    map.addControl(scaleControl);
  }

  if (defaultControls?.zoomButtons) {
    let opt: ZoomOptions = {};
    if (typeof defaultControls.zoomButtons !== 'boolean') {
      opt = defaultControls.zoomButtons;
    }
    map.addControl(new Zoom(opt));
  }

  if (defaultControls?.fullScreenMode) {
    let opt: FullScreenOptions = {
      tipLabel: 'Click to enter/exit fullscreen mode.',
    };
    if (typeof defaultControls.fullScreenMode !== 'boolean') {
      opt = defaultControls.fullScreenMode;
    }
    map.addControl(new FullScreen(opt));
  }
};

export default addDefaultControls;
