import React, { useCallback, useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import DrawCircleLib from '../MeasureRadius/DrawCircleLib';
import MeasureDistanceLib from '../MeasureDistance/MeasureDistanceLib';
import MeasureAreaLib from '../MeasureArea/MeasureAreaLib';
import { useMap } from '../../../../Hooks';
import VectorLayer from 'ol/layer/Vector';
import ControlButton, { ControlButtonProps } from '../../ControlButton';
import { useMapContext } from '../../../../MapContext';

export type ClearMeasuresProps = Omit<
  ControlButtonProps,
  'controlKey' | 'disable' | 'enable' | 'loading'
>;

const ClearMeasures: React.FC<ClearMeasuresProps> = ({
  styled,
  activeLabel = { text: 'Cleaning drawings...' },
  icon,
  color,
  toolTipText,
}) => {
  const [isClearing, setIsClearing] = useState(false);
  const { mapid } = useMapContext();

  const { setActiveMenuControl, map, getLayer } = useMap(mapid);

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
      activeLabel={activeLabel}
      color={color || '#446CD5'}
      enable={onEnable}
      disable={onDisable}
      controlKey='ClearMeasures'
      loading={isClearing}
      toolTipText={toolTipText || 'Clear all measures from the map'}
    />
  );
};

export default ClearMeasures;
