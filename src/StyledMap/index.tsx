import React, { useEffect } from 'react';
import { ControlProps, useMap } from '../Hooks';
import 'semantic-ui-css/semantic.min.css';
import { Options as TileDebugOptions } from 'ol/source/TileDebug';
import styles from './styles.module.scss';
import StyledMenu, { StyledMenuProps } from '../components/StyledMenu';

export interface StyledMapProps {
  id?: string;
  osmBasemap?: boolean;
  defaultControls?: ControlProps;
  startZoom?: number;
  startCoordinates?: [number, number];
  tileDebug?: TileDebugOptions;
}

const StyledMap: React.FC<StyledMapProps> & {
  Controls: React.FC<StyledMenuProps>;
} = ({
  id,
  osmBasemap,
  defaultControls,
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
    <div className={styles.container}>
      <div
        id={id || 'map'}
        style={{
          width: '100%',
          height: '100%',
        }}
      />
      {children}
    </div>
  );
};

StyledMap.Controls = StyledMenu;

export default StyledMap;
