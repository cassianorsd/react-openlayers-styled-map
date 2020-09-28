import React, { useCallback } from 'react';
import ControlButton, { ControlButtonProps } from '../ControlButton';
import { FaStreetView } from 'react-icons/fa';
import { useMap } from '../../Hooks';
import GoogleStreetViewLib from './GoogleStreetViewLib';

export interface GoogleStreetViewProps
  extends Omit<ControlButtonProps, 'loading' | 'activeMenuControl'> {
  controlKey?: string;
}

const GoogleStreetView: React.FC<GoogleStreetViewProps> = ({
  styled,
  activeLabel,
  icon,
  color,
  controlKey,
}) => {
  const { map } = useMap();

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
      styled={styled}
      icon={icon || <FaStreetView size={20} color='#fff' />}
      activeLabel={activeLabel || 'Google Street View'}
      color={color || '#FE2C54'}
      activeMenuControl={{
        controlKey: controlKey || 'GoogleStreetView',
        disable: onDisable,
        enable: onEnable,
      }}
    />
  );
};

export default GoogleStreetView;
