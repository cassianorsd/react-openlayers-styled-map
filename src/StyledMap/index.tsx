import React, { useEffect } from 'react';
import { MapProvider, useMap } from '../Hooks';
import { StyledMapProps } from './interfaces';
import { Container, MapStyle } from './styles';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import addDefaultControls from './functions/defaultControls';
import StyledMenu from './StyledMenu';
import { ThemeProvider } from 'styled-components';
const StyledMapComponent: React.FC<StyledMapProps> = ({
  height,
  width,
  id,
  osmBasemap,
  defaultControls,
  controlsMenu,
  theme,
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
      <ThemeProvider theme={{ ...theme }}>
        <div
          id={id || 'map'}
          style={{
            width: '100%',
            height: '100%',
          }}
        />
        {controlsMenu && <StyledMenu controlsMenu={controlsMenu} />}
        <MapStyle />
      </ThemeProvider>
    </Container>
  );
};

const StyledMap: React.FC<StyledMapProps> = (props) => (
  <MapProvider>
    <StyledMapComponent {...props} />
  </MapProvider>
);

export default StyledMap;
