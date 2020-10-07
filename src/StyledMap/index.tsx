import React, { useEffect } from 'react';
import { useMap } from '../Hooks';
import { Container } from './styles';
import addDefaultControls, {
  DefaultControlsProps,
} from './functions/defaultControls';
import StyledMenu from './StyledMenu';
import 'semantic-ui-css/semantic.min.css';
import { MeasureStyle } from '../Controls/Measure/styles';
import { StyledMenuProps } from './StyledMenu/';
import TileLayer from 'ol/layer/Tile';
import { OSM, XYZ } from 'ol/source';

export interface StyledMapProps {
  width?: string;
  height?: string;
  id?: string;
  osmBasemap?: boolean;
  defaultControls?: DefaultControlsProps;
  controlsMenu?: StyledMenuProps;
  startZoom?: number;
  startCoordinates?: [number, number];
}

const StyledMap: React.FC<StyledMapProps> = ({
  height,
  width,
  id,
  osmBasemap,
  defaultControls,
  controlsMenu,
  startZoom,
  startCoordinates,
}) => {
  const { map, initMap } = useMap();
  useEffect(() => {
    initMap({
      id: id || 'map',
      startCoordinates: startCoordinates,
      startZoom: startZoom,
    });
    if (osmBasemap) {
      map.addLayer(new TileLayer({ source: new OSM() }));
      map.addLayer(
        new TileLayer({
          source: new XYZ({
            url:
              'https://geo.jaraguadosul.sc.gov.br/ortomosaico2020/{z}/{x}/{y}.png',
          }),
        })
      );
    }
    if (defaultControls) addDefaultControls({ map, defaultControls });
  }, [
    id,
    osmBasemap,
    defaultControls,
    map,
    initMap,
    startCoordinates,
    startZoom,
  ]);
  return (
    <Container height={height || '100%'} width={width || '100%'}>
      <div
        id={id || 'map'}
        style={{
          width: '100%',
          height: '100%',
        }}
      />
      {controlsMenu && <StyledMenu {...controlsMenu} />}
      <MeasureStyle />
    </Container>
  );
};

export default StyledMap;
