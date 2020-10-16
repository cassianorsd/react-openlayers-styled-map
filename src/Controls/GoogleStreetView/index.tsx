import React, { useCallback } from 'react';
import { FaStreetView } from 'react-icons/fa';
import { useMap } from '../../Hooks';
import GoogleStreetViewLib from './GoogleStreetViewLib';
import ControlButton, { ControlButtonProps } from '../ControlButton';

export type GoogleStreetViewProps = Omit<
  ControlButtonProps,
  'controlKey' | 'disable' | 'enable' | 'loading'
>;

const GoogleStreetView: React.FC<GoogleStreetViewProps> = ({
  styled,
  activeLabel,
  children,
  color,
  icon,
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
      styled={!!styled}
      icon={icon || <FaStreetView size={20} color='#fff' />}
      color={color || '#FE2C54'}
      activeLabel={activeLabel || 'Google Street View'}
      controlKey='GoogleStreetView'
      enable={onEnable}
      disable={onDisable}
    >
      {children}
    </ControlButton>
  );
};

export default GoogleStreetView;
