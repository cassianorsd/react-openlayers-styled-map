import Map from 'ol/Map';
import OSM, { Options as OSMOptions } from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';
import BaseLayer from 'ol/layer/Base';
import TileDebug, { Options as TileDebugOptions } from 'ol/source/TileDebug';
import { fromLonLat } from 'ol/proj';
import ZoomSlider, {
  Options as ZoomSliderOptions
} from 'ol/control/ZoomSlider';
import ScaleLine, { Options as ScaleLineOptions } from 'ol/control/ScaleLine';
import Zoom, { Options as ZoomOptions } from 'ol/control/Zoom';
import FullScreen, {
  Options as FullScreenOptions
} from 'ol/control/FullScreen';
import Control from 'ol/control/Control';

export interface InitMapOptions {
  targetId: string;
  debugOptions?: {
    osmBasemap?: boolean | OSMOptions;
    tileDebug?: boolean | TileDebugOptions;
  };
  startCoordinates?: [number, number];
  startZoom?: number;
  defaultControls?: {
    fullScreenMode?: FullScreenOptions | boolean;
    zoomButtons?: ZoomOptions | boolean;
    zoomSlider?: ZoomSliderOptions | boolean;
    scale?: ScaleLineOptions | boolean;
  };
}

function initMap({
  targetId,
  debugOptions,
  startCoordinates = [0, 0],
  startZoom = 1,
  defaultControls
}: InitMapOptions): Map | undefined {
  const el = document.getElementById(targetId);
  if (!el) return;
  const layers: BaseLayer[] = [];
  if (debugOptions?.osmBasemap) {
    layers.push(
      new TileLayer({
        zIndex: 1,
        source: new OSM(
          typeof debugOptions?.osmBasemap === 'object'
            ? debugOptions?.osmBasemap
            : {}
        )
      })
    );
  }

  if (debugOptions?.tileDebug)
    layers.push(
      new TileLayer({
        zIndex: 1000,
        source: new TileDebug(
          typeof debugOptions?.tileDebug === 'object'
            ? debugOptions?.tileDebug
            : {}
        )
      })
    );

  const controls: Control[] = [];

  if (defaultControls?.zoomSlider) {
    controls.push(
      new ZoomSlider(
        typeof defaultControls.zoomButtons !== 'boolean'
          ? defaultControls.zoomButtons
          : {}
      )
    );
  }

  if (defaultControls?.zoomButtons) {
    controls.push(
      new Zoom(
        typeof defaultControls.zoomButtons !== 'boolean'
          ? defaultControls.zoomButtons
          : {}
      )
    );
  }

  if (defaultControls?.scale) {
    controls.push(
      new ScaleLine(
        typeof defaultControls.scale !== 'boolean'
          ? defaultControls.scale
          : { bar: true, minWidth: 100 }
      )
    );
  }

  if (defaultControls?.fullScreenMode) {
    controls.push(
      new FullScreen(
        typeof defaultControls.fullScreenMode !== 'boolean'
          ? defaultControls.fullScreenMode
          : {}
      )
    );
  }

  const styledMenu = document.getElementById(`StyledMenu-map-${targetId}`);
  if (styledMenu) {
    controls.push(new Control({ element: styledMenu }));
  }

  const map = new Map({
    target: el,
    layers,
    controls,
    view: new View({
      center: fromLonLat(startCoordinates),
      zoom: startZoom
    })
  });
  return map;
}

export { initMap };
