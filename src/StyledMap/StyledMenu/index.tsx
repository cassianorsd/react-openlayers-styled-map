import { Control } from 'ol/control';
import React, { useEffect } from 'react';
import { useMap } from '../../Hooks';
import ExportImage from './Controls/ExportImage';
import GoogleStreetView from './Controls/GoogleStreetView';
import { Container } from './styles';

export interface StyledMenuProps {
  controlsMenu?: {
    streetView?: {
      activeLabel?: string;
      widthOnActive?: number;
    };
    exportImage?: {};
  };
}

const StyledMenu: React.FC<StyledMenuProps> = ({ controlsMenu }) => {
  const { map } = useMap();
  useEffect(() => {
    const container = document.getElementById('styledmenu');
    if (!container) return;
    const control = new Control({ element: container });
    map.addControl(control);
  }, [map]);

  return (
    <Container id='styledmenu' className='ol-control'>
      {controlsMenu?.streetView && (
        <GoogleStreetView {...controlsMenu?.streetView} />
      )}
      {controlsMenu?.exportImage && (
        <ExportImage {...controlsMenu?.exportImage} />
      )}
    </Container>
  );
};
export default StyledMenu;
