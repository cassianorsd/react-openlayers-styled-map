import React, { useEffect } from 'react';
import { ControlProps, useMap } from '../Hooks';
import { Container } from './styles';
import 'semantic-ui-css/semantic.min.css';
import { MeasureStyle } from '../Controls/Measure/styles';
import { StyledMenuProps } from './StyledMenu/';
import StyledMenu from './StyledMenu';
import { Options as TileDebugOptions } from 'ol/source/TileDebug';
import StyledMenuV3, { StyledMenuV3Props } from './StyledMenuV3';

export interface StyledMapProps {
  width?: string;
  height?: string;
  id?: string;
  osmBasemap?: boolean;
  defaultControls?: ControlProps;
  controlsMenu?: StyledMenuProps;
  startZoom?: number;
  startCoordinates?: [number, number];
  tileDebug?: TileDebugOptions;
}

const StyledMap: React.FC<StyledMapProps> & {
  Controls: React.FC<StyledMenuV3Props>;
} = ({
  height,
  width,
  id,
  osmBasemap,
  defaultControls,
  controlsMenu,
  startZoom,
  startCoordinates,
  tileDebug,
  children,
}) => {
  const { initMap } = useMap();
  useEffect(() => {
    initMap({
      id: id || 'map',
      startCoordinates: startCoordinates || [0, 0],
      startZoom: startZoom,
      defaultControls,
      defaultOSMBasemap: osmBasemap,
      tileDebug,
    });
  }, [
    id,
    osmBasemap,
    defaultControls,
    initMap,
    startCoordinates,
    startZoom,
    tileDebug,
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
      {children}
      <MeasureStyle />
    </Container>
  );
};

StyledMap.Controls = StyledMenuV3;

export default StyledMap;
