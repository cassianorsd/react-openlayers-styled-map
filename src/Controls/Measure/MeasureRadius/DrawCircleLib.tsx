import { Map, MapBrowserEvent, Overlay } from 'ol';
import { EventsKey } from 'ol/events';
import Circle from 'ol/geom/Circle';
import GeometryType from 'ol/geom/GeometryType';
import Draw, { DrawEvent } from 'ol/interaction/Draw';
import { unByKey } from 'ol/Observable';
import OverlayPositioning from 'ol/OverlayPositioning';
import { transform } from 'ol/proj';
import { Vector as VectorSource } from 'ol/source';
import { getDistance } from 'ol/sphere';
import styles from '../styles.scss';

let draw: Draw;
let tooltipElement: HTMLElement | null;
let tooltip: Overlay;
const overlays: Overlay[] = [];
let listener: EventsKey;

interface StartMeasureProps {
  map: Map;
  source: VectorSource;
}

const StartMeasure = ({ map, source }: StartMeasureProps): void => {
  draw = new Draw({
    source,
    type: GeometryType.CIRCLE,
  });

  const createTooltip = (): void => {
    tooltipElement = document.createElement('div');
    tooltipElement.className = styles.olTooltip;
    tooltip = new Overlay({
      element: tooltipElement,
      offset: [15, 0],
      positioning: OverlayPositioning.CENTER_LEFT,
    });
    overlays.push(tooltip);
    map.addOverlay(tooltip);
  };

  map.addInteraction(draw);
  draw.on('drawstart', (e: DrawEvent) => {
    const feature = e.feature;
    const geom = feature.getGeometry() as Circle;
    createTooltip();
    listener = map.on('pointermove', (mapEvt: MapBrowserEvent) => {
      const center = geom.getCenter();
      const radius = geom.getRadius();
      const edgeCoordinate = [center[0] + radius, center[1]];
      const groundRadius = getDistance(
        transform(center, 'EPSG:3857', 'EPSG:4326'),
        transform(edgeCoordinate, 'EPSG:3857', 'EPSG:4326')
      );
      if (tooltipElement) {
        tooltipElement.innerHTML = `${groundRadius.toFixed(2)}m`;
      }
      tooltip.setPosition(mapEvt.coordinate);
    });
  });

  draw.on('drawend', () => {
    if (tooltipElement)
      // tooltipElement.className = 'ol-tooltip ol-tooltip-static-measure-circle';
      tooltipElement.className =
        styles.olTooltip + ' ' + styles.olTooltipStaticMeasureCircle;
    tooltipElement = null;
    if (listener) unByKey(listener);
  });
};

interface StopMeasureProps {
  map: Map;
}
const StopMeasure = ({ map }: StopMeasureProps): void => {
  map.removeInteraction(draw);
};
interface ClearOverlaysProps {
  map: Map;
}
const ClearOverlays = ({ map }: ClearOverlaysProps): void => {
  overlays.forEach((overlay) => {
    map.removeOverlay(overlay);
  });
};
const MeasureDistanceLib = { StartMeasure, StopMeasure, ClearOverlays };
export default MeasureDistanceLib;
