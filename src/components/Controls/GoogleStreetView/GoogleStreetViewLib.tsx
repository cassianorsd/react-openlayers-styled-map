import { Map, MapBrowserEvent } from 'ol';
import { toLonLat } from 'ol/proj';

const onMapClick = (e: MapBrowserEvent): void => {
  const coords = toLonLat(e.coordinate);
  const SVLink = `https://www.google.com/maps?layer=c&cbll=${coords[1]},${coords[0]}`;
  window.open(SVLink, '_blank');
};

const enableGoogleStreetView = (map: Map): void => {
  map.getViewport().style.cursor = 'crosshair';
  map.on('click', onMapClick);
};

const disableGoogleStreetView = (map: Map): void => {
  map.getViewport().style.cursor = '';
  map.un('click', onMapClick);
};

const GoogleStreetViewLib = { enableGoogleStreetView, disableGoogleStreetView };
export default GoogleStreetViewLib;
