import React, { useEffect } from 'react';
import 'ol/ol.css';

import { useMapRegister } from '../../Hooks';
import { initMap, InitMapOptions } from './MapConstructor';
import StyledMenu, { StyledMenuProps } from '../StyledMenuV2';
import MapContext from '../../MapContext';

export interface StyledMapProps
  extends Pick<
    InitMapOptions,
    'debugOptions' | 'startZoom' | 'startCoordinates' | 'defaultControls'
  > {
  id: string;
}

const StyledMap: React.FC<StyledMapProps> & {
  Controls: React.FC<StyledMenuProps>;
} = ({
  id,
  children,
  debugOptions,
  startCoordinates,
  startZoom,
  defaultControls,
}) => {
  const { registerMap } = useMapRegister();
  useEffect(() => {
    const m = initMap({
      targetId: id,
      debugOptions,
      startCoordinates,
      startZoom,
      defaultControls,
    });
    if (m) {
      registerMap(id, m);
    }
  }, []);
  return (
    <div id={id} style={{ width: '100%', height: '100%' }}>
      <MapContext.Provider value={{ mapid: id }}>
        {children}
      </MapContext.Provider>
    </div>
  );
};

StyledMap.Controls = StyledMenu;

export default StyledMap;
