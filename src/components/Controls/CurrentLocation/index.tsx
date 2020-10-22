import { circular } from 'ol/geom/Polygon';
import React, { useCallback, useEffect, useState } from 'react';
import { BiCurrentLocation } from 'react-icons/bi';
import ControlButton, { ControlButtonProps } from '../ControlButton';
import { useMap } from '../../../Hooks';
import VectorSource from 'ol/source/Vector';
import Fill from 'ol/style/Fill';
import Stroke from 'ol/style/Stroke';
import Style from 'ol/style/Style';
import Circle from 'ol/style/Circle';
import VectorLayer from 'ol/layer/Vector';
import { Feature } from 'ol';
import Point from 'ol/geom/Point';
import { fromLonLat } from 'ol/proj';
import { FaTrashAlt } from 'react-icons/fa';
import { useMapContext } from '../../../MapContext';

export type CurrentLocationProps = Omit<
  ControlButtonProps,
  'controlKey' | 'disable' | 'enable' | 'loading'
>;

const CurrentLocation: React.FC<CurrentLocationProps> = ({
  styled,
  activeLabel,
  icon,
  color,
  toolTipText = 'Current Location',
  badgeButton,
}) => {
  const [source] = useState<VectorSource>(new VectorSource());
  const [vector] = useState<VectorLayer>(
    new VectorLayer({
      zIndex: 1000,
      source: source,
      style: new Style({
        fill: new Fill({
          color: 'rgba(42, 82, 188,0.15)',
        }),
        stroke: new Stroke({
          color: 'rgba(42, 82, 188,0.8)',
          width: 2,
        }),
        image: new Circle({
          radius: 7,
          fill: new Fill({
            color: 'rgba(42, 82, 188,0.8)',
          }),
        }),
      }),
    })
  );
  const { mapid } = useMapContext();
  const { map, addLayer, setActiveMenuControl } = useMap(mapid);

  useEffect(() => {
    if (map) {
      addLayer({ layerKey: 'currentLocation', layerObject: vector });
    }
  }, [map, addLayer, vector]);

  const onClear = useCallback(() => {
    source.clear();
  }, [source]);

  const onEnable = useCallback(() => {
    if (!map) return;
    navigator.geolocation.getCurrentPosition((pos: Position) => {
      const coords = [pos.coords.longitude, pos.coords.latitude];
      const accuracy = circular(coords, pos.coords.accuracy);
      source.clear();
      source.addFeatures([
        new Feature(
          accuracy.transform('EPSG:4326', map.getView().getProjection())
        ),
        new Feature(new Point(fromLonLat(coords))),
      ]);
      map.getView().fit(source.getExtent(), {
        maxZoom: 18,
        duration: 500,
      });
      setTimeout(() => {
        setActiveMenuControl(undefined);
      }, 1000);
    });
  }, [map, source, setActiveMenuControl]);

  return (
    <ControlButton
      styled={styled}
      icon={icon || <BiCurrentLocation size={20} color='#fff' />}
      activeLabel={activeLabel}
      color={color || '#FF8C00'}
      controlKey='CurrentLocation'
      enable={onEnable}
      toolTipText={toolTipText}
      badgeButton={
        badgeButton || badgeButton === false
          ? badgeButton
          : {
              content: <FaTrashAlt size={14} color='#fff' />,
              action: onClear,
              toolTipText: 'Clear map',
            }
      }
    />
  );
};

export default CurrentLocation;
