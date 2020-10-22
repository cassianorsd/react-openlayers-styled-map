import React, { useCallback, useEffect, useState } from 'react';
import { RiShareCircleFill } from 'react-icons/ri';
import DrawCircleLib from './DrawCircleLib';
import { useMap } from '../../../../Hooks';
import VectorSource from 'ol/source/Vector';
import Fill from 'ol/style/Fill';
import Stroke from 'ol/style/Stroke';
import Style from 'ol/style/Style';
import Circle from 'ol/style/Circle';
import VectorLayer from 'ol/layer/Vector';
import ControlButton, { ControlButtonProps } from '../../ControlButton';
import { FaEraser } from 'react-icons/fa';
import { useMapContext } from '../../../../MapContext';

export type MeasureRadiusProps = Omit<
  ControlButtonProps,
  'controlKey' | 'disable' | 'enable' | 'loading'
>;

const MeasureRadius: React.FC<MeasureRadiusProps> = ({
  styled,
  activeLabel = {
    title: 'Measure Radius',
    text: 'Click on map to start drawing.',
  },
  icon,
  color,
  toolTipText,
  badgeButton,
}) => {
  const [source] = useState<VectorSource>(new VectorSource());
  const [vector] = useState<VectorLayer>(
    new VectorLayer({
      zIndex: 1000,
      source: source,
      style: new Style({
        fill: new Fill({
          color: 'rgba(98, 65, 199,0.2)',
        }),
        stroke: new Stroke({
          color: 'rgba(98, 65, 199,1)',
          width: 2,
        }),
        image: new Circle({
          radius: 7,
          fill: new Fill({
            color: 'rgba(98, 65, 199,0.2)',
          }),
        }),
      }),
    })
  );
  const { mapid } = useMapContext();
  const { map, addLayer, setActiveMenuControl } = useMap(mapid);

  useEffect(() => {
    if (map) {
      addLayer({ layerKey: 'measureRadius', layerObject: vector });
    }
  }, [map, addLayer, vector]);

  const onEnable = useCallback(() => {
    if (map && source) {
      DrawCircleLib.StartMeasure({ map, source });
    }
  }, [map, source]);

  const onDisable = useCallback(() => {
    if (map) {
      DrawCircleLib.StopMeasure({ map });
    }
  }, [map]);
  const onClear = useCallback(() => {
    source.clear();
    if (!map) return;
    setActiveMenuControl(undefined);
    DrawCircleLib.ClearOverlays({ map });
  }, [source, map, setActiveMenuControl]);
  return (
    <ControlButton
      styled={styled}
      icon={icon || <RiShareCircleFill size={20} color='#fff' />}
      activeLabel={activeLabel}
      color={color || '#446CD5'}
      controlKey='MeasureRadius'
      enable={onEnable}
      disable={onDisable}
      toolTipText={toolTipText || 'Draw a circle and get final radius.'}
      badgeButton={
        badgeButton || badgeButton === false
          ? badgeButton
          : {
              content: <FaEraser size={14} color='#fff' />,
              action: onClear,
              toolTipText: 'Clear drawings',
            }
      }
    />
  );
};

export default MeasureRadius;
