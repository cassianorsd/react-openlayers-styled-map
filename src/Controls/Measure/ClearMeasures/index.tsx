import React, { useCallback, useState } from 'react';
import ControlButton, { ControlButtonProps } from '../../ControlButton';
import { FaTrashAlt } from 'react-icons/fa';
import DrawCircleLib from '../MeasureRadius/DrawCircleLib';
import MeasureDistanceLib from '../MeasureDistance/MeasureDistanceLib';
import MeasureAreaLib from '../MeasureArea/MeasureAreaLib';

import { useMap } from '../../../Hooks';
import VectorLayer from 'ol/layer/Vector';

export interface ClearMeasuresProps
  extends Omit<ControlButtonProps, 'loading' | 'activeMenuControl'> {
  controlKey?: string;
}

const ClearMeasures: React.FC<ClearMeasuresProps> = ({
  styled,
  activeLabel,
  icon,
  color,
  controlKey,
}) => {
  const [isClearing, setIsClearing] = useState(false);
  const { setActiveMenuControl, activeLayers, map } = useMap();

  const onEnable = useCallback(() => {
    if (!map) return;
    setIsClearing(true);
    setTimeout(() => {
      console.log(activeLayers);
      if ('measureArea' in activeLayers) {
        const layer = activeLayers.measureArea as VectorLayer;
        layer.getSource().clear();
      }
      if ('measureDistance' in activeLayers) {
        const layer = activeLayers.measureDistance as VectorLayer;
        layer.getSource().clear();
      }
      if ('measureRadius' in activeLayers) {
        const layer = activeLayers.measureRadius as VectorLayer;
        layer.getSource().clear();
      }
      MeasureAreaLib.ClearOverlays({ map });
      MeasureDistanceLib.ClearOverlays({ map });
      DrawCircleLib.ClearOverlays({ map });
      setActiveMenuControl(undefined);
    }, 750);
  }, [setActiveMenuControl, activeLayers, map]);

  const onDisable = useCallback(() => {
    setIsClearing(false);
  }, []);

  return (
    <ControlButton
      styled={styled}
      icon={icon || <FaTrashAlt size={20} color='#fff' />}
      activeLabel={activeLabel || 'Limpando Medidas'}
      color={color || '#446CD5'}
      activeMenuControl={{
        controlKey: controlKey || 'ClearMeasures',
        disable: onDisable,
        enable: onEnable,
      }}
      loading={isClearing}
    />
  );
};

export default ClearMeasures;
