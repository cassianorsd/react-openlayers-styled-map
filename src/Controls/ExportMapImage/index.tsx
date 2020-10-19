import React, { useCallback, useState } from 'react';
import { FaImage } from 'react-icons/fa';
import { useMap } from '../../Hooks';
import ExportMapImageLib from './ExportMapImageLib';
import ControlButton, { ControlButtonProps } from '../ControlButton';

export type ExportMapImageProps = Omit<
  ControlButtonProps,
  'controlKey' | 'disable' | 'enable' | 'loading'
>;

const ExportMapImage: React.FC<ExportMapImageProps> = ({
  styled,
  activeLabel = { text: 'Generating image...' },
  icon,
  color,
  toolTipText,
}) => {
  const [rendering, setRendering] = useState(false);
  const { map, setActiveMenuControl } = useMap();

  const onEnable = useCallback(() => {
    if (!map) return;
    setRendering(true);
    ExportMapImageLib.exportPNG(map, () => {
      setActiveMenuControl(undefined);
      setRendering(false);
    });
  }, [map, setActiveMenuControl]);

  const onDisable = useCallback(() => {
    setActiveMenuControl(undefined);
    setRendering(false);
  }, [setActiveMenuControl]);

  return (
    <ControlButton
      styled={styled}
      icon={icon || <FaImage size={20} color='#fff' />}
      activeLabel={activeLabel}
      color={color || '#9ACD32'}
      controlKey='ExportMapImage'
      loading={rendering}
      enable={onEnable}
      disable={onDisable}
      toolTipText={toolTipText || 'Export Image of Current View'}
    />
  );
};

export default ExportMapImage;
