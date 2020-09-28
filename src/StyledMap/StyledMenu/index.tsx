import { Control } from 'ol/control';
import React, { useEffect } from 'react';
import { useMap } from '../../Hooks';
import { Container } from './styles';

export interface StyledMenuProps {
  styled?: boolean;
  children?: React.ReactNode;
}

const StyledMenu: React.FC<StyledMenuProps> = ({ styled, children }) => {
  const { map } = useMap();
  useEffect(() => {
    const container = document.getElementById('styledmenu');
    if (!container) return;
    const control = new Control({ element: container });
    map.addControl(control);
  }, [map]);
  if (!children) return <span />;
  return (
    <Container id='styledmenu' className='ol-control' styled={!!styled}>
      {children}
    </Container>
  );
};
export default StyledMenu;
