import React, { useCallback, useEffect, useState } from 'react';
import ControlButton, { ControlButtonProps } from '../../ControlButton';
import { FaRuler } from 'react-icons/fa';
import MeasureLib from '../MeasureLib';
import { useMap } from '../../../Hooks';
import VectorSource from 'ol/source/Vector';
import Fill from 'ol/style/Fill';
import Stroke from 'ol/style/Stroke';
import Style from 'ol/style/Style';
import Circle from 'ol/style/Circle';
import VectorLayer from 'ol/layer/Vector';
import GeometryType from 'ol/geom/GeometryType';
export interface MeasureDistanceProps
  extends Omit<ControlButtonProps, 'loading' | 'activeMenuControl'> {
  controlKey?: string;
}

const MeasureDistance: React.FC<MeasureDistanceProps> = ({
  styled,
  activeLabel,
  icon,
  color,
  controlKey,
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
      // map.addLayer(vector);
      addLayer({ layerKey: 'measureDistance', layerObject: vector });
    }
  }, [map, addLayer, vector]);

  const onEnable = useCallback(() => {
    if (map && source) {
      MeasureLib.StartMeasure({
        map,
        source,
        type: GeometryType.LINE_STRING,
      });
    }
  }, [map, source]);

  const onDisable = useCallback(() => {
    if (map) MeasureLib.StopMeasure({ map });
  }, [map]);

  return (
    <ControlButton
      styled={styled}
      icon={icon || <FaRuler size={20} color='#fff' />}
      activeLabel={activeLabel || 'Measure Distance'}
      color={color || '#446CD5'}
      activeMenuControl={{
        controlKey: controlKey || 'MeasureDistance',
        disable: onDisable,
        enable: onEnable,
      }}
    />
  );
};

export default MeasureDistance;
