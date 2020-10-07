import React, { ReactNode, useEffect } from 'react';
import { useMap } from '../Hooks';
import { Container } from './styles';
// import OSM from 'ol/source/OSM';
// import TileLayer from 'ol/layer/Tile';
import addDefaultControls, {
  DefaultControlsProps,
} from './functions/defaultControls';
import StyledMenu from './StyledMenu';
import 'semantic-ui-css/semantic.min.css';
import { MeasureStyle } from '../Controls/Measure/styles';
import { StyledMenuProps } from './StyledMenu/';
import TileLayer from 'ol/layer/Tile';
import { OSM } from 'ol/source';

export interface StyledMapProps {
  width?: string;
  height?: string;
  id?: string;
  osmBasemap?: boolean;
  defaultControls?: DefaultControlsProps;
  controlsMenu?: StyledMenuProps;
  testing?: ReactNode[];
}

const StyledMapComponent: React.FC<StyledMapProps> = ({
  height,
  width,
  id,
  osmBasemap,
  defaultControls,
  controlsMenu,
}) => {
  const { map, initMap } = useMap();
  useEffect(() => {
    initMap({ id: id || 'map' });
    // setTarget(id || 'map');
    if (osmBasemap) map.addLayer(new TileLayer({ source: new OSM() }));
    if (defaultControls) addDefaultControls({ map, defaultControls });
  }, [id, osmBasemap, defaultControls, map, initMap]);
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

// const StyledMap: React.FC<StyledMapProps> = (props) => (
//   <MapProvider>
//     <StyledMapComponent {...props} />
//     <MeasureStyle />
//   </MapProvider>
// );

export default StyledMapComponent;
