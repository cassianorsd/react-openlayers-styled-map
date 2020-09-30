import React, { useEffect } from 'react';
import { MapProvider, useMap } from '../Hooks';
import { StyledMapProps } from './interfaces';
import { Container } from './styles';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import addDefaultControls from './functions/defaultControls';
import StyledMenu from './StyledMenu';
import 'semantic-ui-css/semantic.min.css';
import { MeasureStyle } from '../Controls/Measure/styles';

const StyledMapComponent: React.FC<StyledMapProps> = ({
  height,
  width,
  id,
  osmBasemap,
  defaultControls,
  controlsMenu,
}) => {
  const { setTarget, map } = useMap();
  useEffect(() => {
    setTarget(id || 'map');
    if (osmBasemap) map.addLayer(new TileLayer({ source: new OSM() }));
    if (defaultControls) addDefaultControls({ map, defaultControls });
  }, [id, osmBasemap, defaultControls, map, setTarget]);
  return (
    <Container
      height={height ? `${height}px` : '100%'}
      width={width ? `${width}px` : '100%'}
    >
      <div
        id={id || 'map'}
        style={{
          width: '100%',
          height: '100%',
        }}
      />
      {controlsMenu && <StyledMenu {...controlsMenu} />}
    </Container>
  );
};

const StyledMap: React.FC<StyledMapProps> = (props) => (
  <MapProvider>
    <StyledMapComponent {...props} />
    <MeasureStyle />
  </MapProvider>
);

export default StyledMap;
