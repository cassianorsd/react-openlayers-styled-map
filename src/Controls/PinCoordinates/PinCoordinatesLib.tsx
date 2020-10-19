import { Map, MapBrowserEvent } from 'ol';
import { EventsKey } from 'ol/events';
import { unByKey } from 'ol/Observable';
import PinCoordinatesPopup from './PinCoordinatesPopup';

let evtKeys: EventsKey;

const startPinCoordinateInteraction = (map: Map): void => {
  map.getViewport().style.cursor = 'crosshair';

  evtKeys = map.on('singleclick', (e: MapBrowserEvent) => {
    const position = e.coordinate;
    PinCoordinatesPopup.addPopup({
      map,
      position,
      options: { clearOthers: true },
    });
  });
};

const stopPinCoordinateInteraction = (map: Map): void => {
  map.getViewport().style.cursor = '';
  PinCoordinatesPopup.clearOverlays(map);
  if (evtKeys) unByKey(evtKeys);
};

export default { startPinCoordinateInteraction, stopPinCoordinateInteraction };
