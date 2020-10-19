import React, { useCallback, useEffect, useState } from 'react';
import { RiShareCircleFill } from 'react-icons/ri';
import DrawCircleLib from './DrawCircleLib';
import { useMap } from '../../../Hooks';
import VectorSource from 'ol/source/Vector';
import Fill from 'ol/style/Fill';
import Stroke from 'ol/style/Stroke';
import Style from 'ol/style/Style';
import Circle from 'ol/style/Circle';
import VectorLayer from 'ol/layer/Vector';
import ControlButton, { ControlButtonProps } from '../../ControlButton';

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
}) => {
  const [source] = useState<VectorSource>(new VectorSource());
  const [vector] = useState<VectorLayer>(
    new VectorLayer({
      zIndex: 1000,
      source: source,
      style: new Style({
        fill: new Fill({
          color: 'rgba(255, 255, 255, 0.2)',
        }),
        stroke: new Stroke({
          color: '#ffcc33',
          width: 2,
        }),
        image: new Circle({
          radius: 7,
          fill: new Fill({
            color: '#ffcc33',
          }),
        }),
      }),
    })
  );
  const { map, addLayer } = useMap();

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
    />
  );
};

export default MeasureRadius;
