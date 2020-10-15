import React, { useCallback } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import PinCoordinatesLib from './PinCoordinatesLib';
import { useMap } from '../../Hooks';
import ControlButton, { ControlButtonProps } from '../ControlButton';

export type PinCoordinatesProps = Omit<
  ControlButtonProps,
  'controlKey' | 'disable' | 'enable' | 'loading'
>;

const PinCoordinates: React.FC<PinCoordinatesProps> = ({
  styled,
  activeLabel,
  icon,
  color,
}) => {
  const { map } = useMap();

  const onEnable = useCallback(() => {
    if (!map) return;
    PinCoordinatesLib.startPinCoordinateInteraction(map);
  }, [map]);

  const onDisable = useCallback(() => {
    if (!map) return;
    PinCoordinatesLib.stopPinCoordinateInteraction(map);
  }, [map]);

  return (
    <ControlButton
      styled={styled}
      icon={icon || <FaMapMarkerAlt size={20} color='#fff' />}
      activeLabel={activeLabel || 'Pin Coordinates'}
      color={color || 'orange'}
      controlKey='PinCoordinates'
      enable={onEnable}
      disable={onDisable}
    />
  );
};

export default PinCoordinates;
