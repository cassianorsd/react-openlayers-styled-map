import React, { useCallback, useEffect, useState } from 'react';
import { FaDrawPolygon } from 'react-icons/fa';
import MeasureAreaLib from './MeasureAreaLib';
import { useMap } from '../../../Hooks';
import VectorSource from 'ol/source/Vector';
import Fill from 'ol/style/Fill';
import Stroke from 'ol/style/Stroke';
import Style from 'ol/style/Style';
import Circle from 'ol/style/Circle';
import VectorLayer from 'ol/layer/Vector';
import GeometryType from 'ol/geom/GeometryType';
import ControlButton, { ControlButtonProps } from '../../ControlButton';

export type MeasureAreaProps = Omit<
  ControlButtonProps,
  'controlKey' | 'disable' | 'enable' | 'loading'
>;

const MeasureArea: React.FC<MeasureAreaProps> = ({
  styled,
  activeLabel = {
    title: 'Measure Area',
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
      addLayer({ layerKey: 'measureArea', layerObject: vector });
    }
  }, [map, addLayer, vector]);

  const onEnable = useCallback(() => {
    if (map && source) {
      MeasureAreaLib.StartMeasure({
        map,
        source,
        type: GeometryType.POLYGON,
      });
    }
  }, [map, source]);

  const onDisable = useCallback(() => {
    if (map) MeasureAreaLib.StopMeasure({ map });
  }, [map]);

  return (
    <ControlButton
      styled={styled}
      icon={icon || <FaDrawPolygon size={20} color='#fff' />}
      activeLabel={activeLabel}
      color={color || '#446CD5'}
      controlKey='MeasureArea'
      enable={onEnable}
      disable={onDisable}
      toolTipText={toolTipText || 'Draw polygon to measure content area'}
    />
  );
};

export default MeasureArea;
