import React, { useCallback, useEffect, useState } from 'react';
import { FaDrawPolygon, FaEraser } from 'react-icons/fa';
import MeasureAreaLib from './MeasureAreaLib';
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
  badgeButton,
}) => {
  const [source] = useState<VectorSource>(new VectorSource());
  const [vector] = useState<VectorLayer>(
    new VectorLayer({
      zIndex: 1000,
      source: source,
      style: new Style({
        fill: new Fill({
          color: 'rgba(1, 171, 116,0.2)',
        }),
        stroke: new Stroke({
          color: 'rgba(1, 171, 116,1)',
          width: 2,
        }),
        image: new Circle({
          radius: 7,
          fill: new Fill({
            color: 'rgba(1, 171, 116,0.2)',
          }),
        }),
      }),
    })
  );
  const { mapid } = useMapContext();
  const { map, addLayer, setActiveMenuControl } = useMap(mapid);

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

  const onClear = useCallback(() => {
    source.clear();
    if (!map) return;
    setActiveMenuControl(undefined);
    MeasureAreaLib.ClearOverlays({ map });
  }, [source, map, setActiveMenuControl]);

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

export default MeasureArea;
