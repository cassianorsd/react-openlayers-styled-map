import React, { useCallback } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import PinCoordinatesLib from './PinCoordinatesLib';
import { useMap } from '../../../Hooks';
import ControlButton, { ControlButtonProps } from '../ControlButton';
import { useMapContext } from '../../../MapContext';

export interface PinCoordinatesProps
  extends Omit<
    ControlButtonProps,
    'controlKey' | 'disable' | 'enable' | 'loading'
  > {
  copyText?: string;
  copiedText?: string;
}

const PinCoordinates: React.FC<PinCoordinatesProps> = ({
  styled,
  activeLabel = {
    title: 'Get Coordinates',
    text: 'Click on desired location on map to get information.',
  },
  icon,
  color,
  toolTipText,
  copyText,
  copiedText,
}) => {
  const { mapid } = useMapContext();

  const { map } = useMap(mapid);

  const onEnable = useCallback(() => {
    if (!map) return;
    PinCoordinatesLib.startPinCoordinateInteraction({
      map,
      options: { copyText, copiedText },
    });
  }, [map, copyText, copiedText]);

  const onDisable = useCallback(() => {
    if (!map) return;
    PinCoordinatesLib.stopPinCoordinateInteraction(map);
  }, [map]);

  return (
    <ControlButton
      styled={styled}
      icon={icon || <FaMapMarkerAlt size={20} color='#fff' />}
      activeLabel={activeLabel}
      color={color || '#FF8C00'}
      controlKey='PinCoordinates'
      enable={onEnable}
      disable={onDisable}
      toolTipText={toolTipText || 'Get Coordinates from point'}
    />
  );
};

export default PinCoordinates;
