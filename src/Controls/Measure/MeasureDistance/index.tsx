import React, { useCallback, useEffect, useState } from 'react';
import { FaRuler } from 'react-icons/fa';
import MeasureDistanceLib from './MeasureDistanceLib';
import { useMap } from '../../../Hooks';
import VectorSource from 'ol/source/Vector';
import Fill from 'ol/style/Fill';
import Stroke from 'ol/style/Stroke';
import Style from 'ol/style/Style';
import Circle from 'ol/style/Circle';
import VectorLayer from 'ol/layer/Vector';
import GeometryType from 'ol/geom/GeometryType';
import ControlButton, { ControlButtonProps } from '../../ControlButton';

export type MeasureDistanceProps = Omit<
  ControlButtonProps,
  'controlKey' | 'disable' | 'enable' | 'loading'
>;
const MeasureDistance: React.FC<MeasureDistanceProps> = ({
  styled,
  activeLabel,
  icon,
  color,
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
      addLayer({ layerKey: 'measureDistance', layerObject: vector });
    }
  }, [map, addLayer, vector]);

  const onEnable = useCallback(() => {
    if (map && source) {
      MeasureDistanceLib.StartMeasure({
        map,
        source,
        type: GeometryType.LINE_STRING,
      });
    }
  }, [map, source]);

  const onDisable = useCallback(() => {
    if (map) MeasureDistanceLib.StopMeasure({ map });
  }, [map]);

  return (
    <ControlButton
      styled={styled}
      icon={icon || <FaRuler size={20} color='#fff' />}
      activeLabel={activeLabel || 'Measure Distance'}
      color={color || 'blue'}
      controlKey='MeasureDistance'
      enable={onEnable}
      disable={onDisable}
    />
  );
};

export default MeasureDistance;
