import { Map, MapBrowserEvent } from 'ol';
import { EventsKey } from 'ol/events';
import { unByKey } from 'ol/Observable';
import PinCoordinatesPopup from './PinCoordinatesPopup';

let evtKeys: EventsKey;
interface StartPinCoordinateInteractionProps {
  map: Map;
  options?: {
    copyText?: string;
    copiedText?: string;
  };
}

const startPinCoordinateInteraction = ({
  map,
  options
}: StartPinCoordinateInteractionProps): void => {
  map.getViewport().style.cursor = 'crosshair';

  evtKeys = map.on('singleclick', (e: MapBrowserEvent) => {
    const position = e.coordinate;
    PinCoordinatesPopup.addPopup({
      map,
      position,
      options: {
        clearOthers: true,
        copyText: options?.copyText,
        copiedText: options?.copiedText
      }
    });
  });
};

const stopPinCoordinateInteraction = (map: Map): void => {
  map.getViewport().style.cursor = '';
  PinCoordinatesPopup.clearOverlays(map);
  if (evtKeys) unByKey(evtKeys);
};

export default { startPinCoordinateInteraction, stopPinCoordinateInteraction };
