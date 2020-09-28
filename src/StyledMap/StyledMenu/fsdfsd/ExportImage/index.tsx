import React, { useCallback, useState } from 'react';
import MenuButton, { MenuButtonProps } from '../../MenuButton';
import { FaImage } from 'react-icons/fa';
import { useMap } from '../../../../Hooks';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';
export type ExportImageProps = Pick<MenuButtonProps, 'icon'>;

const ExportImage: React.FC<ExportImageProps> = ({ icon: Icon }) => {
  const [generating, setGenerating] = useState<boolean>(false);
  const { map, setActiveMenuControl } = useMap();

  const onEnable = useCallback(() => {
    if (!map) return;
    setGenerating(true);
    map.once('rendercomplete', () => {
      html2canvas(map.getViewport(), {
        allowTaint: true,
        ignoreElements: (el) => !!(el?.id && el.id === 'styledmenu'),
      }).then((canvas) => {
        canvas.toBlob((blob) => {
          if (blob) saveAs(blob, 'map.png');
          setGenerating(false);
          setActiveMenuControl('');
        });
      });
    });
    map.renderSync();
  }, [map, setActiveMenuControl]);

  const onDisable = useCallback(() => {
    setGenerating(false);
  }, []);

  return (
    <MenuButton
      color='red'
      controlKey='ExportImage'
      icon={Icon || <FaImage size={20} color='#fff' />}
      onEnabled={onEnable}
      onDisabled={onDisable}
      loading={generating}
    />
  );
};

export default ExportImage;
