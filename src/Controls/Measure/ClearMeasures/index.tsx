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
  const { setActiveMenuControl, map, getLayer } = useMap();

  const onEnable = useCallback(() => {
    if (!map) return;
    setIsClearing(true);
    setTimeout(() => {
      const clearLayer = (key: string): void => {
        const layer = getLayer(key) as VectorLayer;
        if (layer) layer.getSource().clear();
      };
      clearLayer('measureDistance');
      clearLayer('measureArea');
      clearLayer('measureRadius');
      MeasureAreaLib.ClearOverlays({ map });
      MeasureDistanceLib.ClearOverlays({ map });
      DrawCircleLib.ClearOverlays({ map });
      setActiveMenuControl(undefined);
    }, 750);
  }, [setActiveMenuControl, getLayer, map]);

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
