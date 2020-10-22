import { Feature, Map, MapBrowserEvent, Overlay } from 'ol';
import LineString from 'ol/geom/LineString';
import Polygon from 'ol/geom/Polygon';
import { Vector as VectorSource } from 'ol/source';
import { getLength, getArea } from 'ol/sphere';
import Draw, { DrawEvent } from 'ol/interaction/Draw';
import GeometryType from 'ol/geom/GeometryType';
import Style from 'ol/style/Style';
import Fill from 'ol/style/Fill';
import Stroke from 'ol/style/Stroke';
import CircleStyle from 'ol/style/Circle';
import { EventsKey } from 'ol/events';
import { unByKey } from 'ol/Observable';
import OverlayPositioning from 'ol/OverlayPositioning';
import styles from '../styles.scss';
import classnames from 'classnames';

let sketch: Feature | null;
let helpTooltipElement: HTMLElement;
let helpTooltip: Overlay;
const overlays: Overlay[] = [];
let measureTooltipElement: HTMLElement | null;
let measureTooltip: Overlay;
const continuePolygonMsg = 'Click to continue drawing the polygon';
const continueLineMsg = 'Click to continue drawing the line';
let draw: Draw;

const pointerMoveHandler = (evt: MapBrowserEvent): void => {
  if (evt.dragging) {
    return;
  }
  let helpMsg = 'Click to start drawing';
  if (sketch) {
    const geom = sketch.getGeometry();
    if (geom instanceof Polygon) {
      helpMsg = continuePolygonMsg;
    } else if (geom instanceof LineString) {
      helpMsg = continueLineMsg;
    }
  }
  helpTooltipElement.innerHTML = helpMsg;
  helpTooltip.setPosition(evt.coordinate);
  helpTooltipElement.classList.remove('hidden');
};

const formatLength = (line: LineString): string => {
  const length = getLength(line);
  let output;
  if (length > 100) {
    output = Math.round((length / 1000) * 100) / 100 + ' ' + 'km';
  } else {
    output = Math.round(length * 100) / 100 + ' ' + 'm';
  }
  return output;
};
const formatArea = (polygon: Polygon): string => {
  const area = getArea(polygon);
  let output;
  if (area > 10000) {
    output = Math.round((area / 1000000) * 100) / 100 + ' ' + 'km<sup>2</sup>';
  } else {
    output = Math.round(area * 100) / 100 + ' ' + 'm<sup>2</sup>';
  }
  return output;
};

interface StartMeasureProps {
  map: Map;
  source: VectorSource;
  type: GeometryType.LINE_STRING | GeometryType.POLYGON;
}

const StartMeasure = ({ map, source, type }: StartMeasureProps): void => {
  map.on('pointermove', pointerMoveHandler);
  map.getViewport().addEventListener('mouseout', function () {
    helpTooltipElement.classList.add('hidden');
  });

  function createHelpTooltip(): void {
    if (helpTooltipElement && helpTooltipElement.parentNode) {
      helpTooltipElement.parentNode.removeChild(helpTooltipElement);
    }
    helpTooltipElement = document.createElement('div');
    // helpTooltipElement.className = 'ol-tooltip hidden';
    helpTooltipElement.className = styles.olTooltip + ' hidden';
    helpTooltip = new Overlay({
      element: helpTooltipElement,
      offset: [15, 0],
      positioning: OverlayPositioning.CENTER_LEFT
    });
    map.addOverlay(helpTooltip);
  }

  function createMeasureTooltip(): void {
    if (measureTooltipElement && measureTooltipElement.parentNode) {
      measureTooltipElement.parentNode.removeChild(measureTooltipElement);
    }
    measureTooltipElement = document.createElement('div');
    // measureTooltipElement.className = 'ol-tooltip ol-tooltip-measure';
    measureTooltipElement.className =
      styles.olTooltip + ' ' + styles.olTooltipMeasure;
    measureTooltip = new Overlay({
      element: measureTooltipElement,
      offset: [0, -15],
      positioning: OverlayPositioning.BOTTOM_CENTER
    });
    overlays.push(measureTooltip);
    map.addOverlay(measureTooltip);
  }

  function addInteraction(): void {
    draw = new Draw({
      source: source,
      type,
      style: new Style({
        fill: new Fill({
          color: 'rgba(255, 255, 255, 0.2)'
        }),
        stroke: new Stroke({
          color: 'rgba(0, 0, 0, 0.5)',
          lineDash: [10, 10],
          width: 2
        }),
        image: new CircleStyle({
          radius: 5,
          stroke: new Stroke({
            color: 'rgba(0, 0, 0, 0.7)'
          }),
          fill: new Fill({
            color: 'rgba(255, 255, 255, 0.2)'
          })
        })
      })
    });
    map.addInteraction(draw);

    createMeasureTooltip();
    createHelpTooltip();

    interface MapDrawEvent extends DrawEvent, MapBrowserEvent {}

    let listener: EventsKey;
    draw.on('drawstart', function (evt: MapDrawEvent) {
      sketch = evt.feature;
      let tooltipCoord = evt.coordinate;
      listener = sketch.getGeometry().on('change', function (evt) {
        const geom = evt.target;
        let output;
        if (geom instanceof Polygon) {
          output = formatArea(geom);
          tooltipCoord = geom.getInteriorPoint().getCoordinates();
        } else if (geom instanceof LineString) {
          output = formatLength(geom);
          tooltipCoord = geom.getLastCoordinate();
        }
        if (measureTooltipElement) {
          measureTooltipElement.innerHTML = output || '';
          measureTooltip.setPosition(tooltipCoord);
        }
      });
    });

    draw.on('drawend', function () {
      if (measureTooltipElement) {
        // measureTooltipElement.className = 'ol-tooltip ol-tooltip-static';
        measureTooltipElement.className = classnames(
          styles.olTooltip,
          styles.olTooltipStatic,
          styles.Area
        );
        measureTooltip.setOffset([0, -7]);
      }
      sketch = null;
      measureTooltipElement = null;
      createMeasureTooltip();
      unByKey(listener);
    });
  }
  addInteraction();
};

interface StopDistanceMeasureProps {
  map: Map;
}
const StopMeasure = ({ map }: StopDistanceMeasureProps): void => {
  map.removeInteraction(draw);
  map.removeOverlay(helpTooltip);
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
