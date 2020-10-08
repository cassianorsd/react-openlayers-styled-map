import React, { useEffect } from 'react';
import { ControlProps, useMap } from '../Hooks';
import { Container } from './styles';
// import { DefaultControlsProps } from './functions/defaultControls';
// import StyledMenu from './StyledMenu';
import 'semantic-ui-css/semantic.min.css';
import { MeasureStyle } from '../Controls/Measure/styles';
import { StyledMenuProps } from './StyledMenu/';
import StyledMenuV2 from './StyledMenuV2';
// import { Coordinate } from 'ol/coordinate';
// import TileLayer from 'ol/layer/Tile';
// import { OSM } from 'ol/source';

export interface StyledMapProps {
  width?: string;
  height?: string;
  id?: string;
  osmBasemap?: boolean;
  defaultControls?: ControlProps;
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
  const { initMap } = useMap();
  useEffect(() => {
    initMap({
      id: id || 'map',
      startCoordinates: startCoordinates || [0, 0],
      startZoom: startZoom,
      defaultControls,
      defaultOSMBasemap: osmBasemap,
    });
  }, [id, osmBasemap, defaultControls, initMap, startCoordinates, startZoom]);
  return (
    <Container height={height || '100%'} width={width || '100%'}>
      <div
        id={id || 'map'}
        style={{
          width: '100%',
          height: '100%',
        }}
      />
      {controlsMenu && <StyledMenuV2 {...controlsMenu} />}
      <MeasureStyle />
    </Container>
  );
};

export default StyledMap;
