import React from 'react';
import { Container } from './styles';

export interface StyledMenuProps {
  showRibbon?: boolean;
  children?: React.ReactNode;
}

const StyledMenu: React.FC<StyledMenuProps> = ({
  showRibbon = true,
  children,
}) => {
  if (!children) return <span />;
  return (
    <Container
      id='StyledMenu'
      className={`ol-control ${showRibbon ? 'ribbon' : ''}`}
    >
      {children}
    </Container>
  );
};
export default StyledMenu;
