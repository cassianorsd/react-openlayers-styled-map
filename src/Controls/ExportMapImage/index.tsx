import React, { useCallback, useState } from 'react';
import ControlButton, { ControlButtonProps } from '../ControlButton';
import { FaImage } from 'react-icons/fa';
import { useMap } from '../../Hooks';

import ExportMapImageLib from './ExportMapImageLib';

export interface ExportMapImageProps
  extends Omit<ControlButtonProps, 'loading' | 'activeMenuControl'> {
  controlKey?: string;
}

const ExportMapImage: React.FC<ExportMapImageProps> = ({
  styled,
  activeLabel,
  icon,
  color,
  controlKey,
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
      activeLabel={activeLabel || ''}
      color={color || '#9ACD32'}
      activeMenuControl={{
        controlKey: controlKey || 'ExportMapImage',
        disable: onDisable,
        enable: onEnable,
      }}
      loading={rendering}
    />
  );
};

export default ExportMapImage;
