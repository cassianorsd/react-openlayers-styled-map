import React, { useCallback, useEffect, useState } from 'react';
import { FaEraser, FaRuler } from 'react-icons/fa';
import MeasureDistanceLib from './MeasureDistanceLib';
import { useMap } from '../../../../Hooks';
import VectorSource from 'ol/source/Vector';
import Fill from 'ol/style/Fill';
import Stroke from 'ol/style/Stroke';
import Style from 'ol/style/Style';
import Circle from 'ol/style/Circle';
import VectorLayer from 'ol/layer/Vector';
import GeometryType from 'ol/geom/GeometryType';
import ControlButton, { ControlButtonProps } from '../../ControlButton';
import { useMapContext } from '../../../../MapContext';

export type MeasureDistanceProps = Omit<
  ControlButtonProps,
  'controlKey' | 'disable' | 'enable' | 'loading'
>;
const MeasureDistance: React.FC<MeasureDistanceProps> = ({
  styled,
  activeLabel = {
    title: 'Measure Distances',
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
          color: 'rgb(42, 82, 188)',
        }),
        stroke: new Stroke({
          color: 'rgb(42, 82, 188)',
          width: 3,
        }),
        image: new Circle({
          radius: 7,
          fill: new Fill({
            color: 'rgb(42, 82, 188)',
          }),
        }),
      }),
    })
  );
  const { mapid } = useMapContext();
  const { map, addLayer, setActiveMenuControl } = useMap(mapid);

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

  const onClear = useCallback(() => {
    source.clear();
    if (!map) return;
    setActiveMenuControl(undefined);
    MeasureDistanceLib.ClearOverlays({ map });
  }, [source, map, setActiveMenuControl]);

  return (
    <ControlButton
      styled={styled}
      icon={icon || <FaRuler size={20} color='#fff' />}
      activeLabel={activeLabel}
      color={color || '#446CD5'}
      controlKey='MeasureDistance'
      enable={onEnable}
      disable={onDisable}
      toolTipText={toolTipText || 'Draw polyline and get total length'}
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

export default MeasureDistance;
