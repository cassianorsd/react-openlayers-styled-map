import React, { useCallback } from 'react';
import { FaStreetView } from 'react-icons/fa';
import { useMap } from '../../../Hooks';
import GoogleStreetViewLib from './GoogleStreetViewLib';
import ControlButton, { ControlButtonV2Props } from '../ControlButton';
import { useMapContext } from '../../../MapContext';

export type GoogleStreetViewV2Props = Omit<
  ControlButtonV2Props,
  'controlKey' | 'disable' | 'enable' | 'loading'
>;

const GoogleStreetView: React.FC<GoogleStreetViewV2Props> = ({
  styled,
  activeLabel = {
    title: 'Google Street View',
    text: 'Single click on desired location to open street view.',
  },
  children,
  color,
  icon = <FaStreetView size={20} color='#fff' />,
  toolTipText,
}) => {
  const { mapid } = useMapContext();
  const { map } = useMap(mapid);

  const onEnable = useCallback(() => {
    if (map) {
      GoogleStreetViewLib.enableGoogleStreetView(map);
    }
  }, [map]);

  const onDisable = useCallback(() => {
    if (map) {
      GoogleStreetViewLib.disableGoogleStreetView(map);
    }
  }, [map]);

  return (
    <ControlButton
      // as={
      //   <div
      //     style={{ width: '200px', height: '30px', backgroundColor: 'green' }}
      //   >
      //     fds
      //   </div>
      // }
      styled={styled}
      icon={icon}
      color={color || '#FE2C54'}
      activeLabel={activeLabel}
      controlKey='GoogleStreetView'
      enable={onEnable}
      disable={onDisable}
      toolTipText={toolTipText || 'Google Street View'}
    >
      {children}
    </ControlButton>
  );
};

export default GoogleStreetView;
