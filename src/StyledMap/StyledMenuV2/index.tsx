import React from 'react';
import { Container } from './styles';

export interface StyledMenuProps {
  styled?: boolean;
  children?: React.ReactNode;
}

const StyledMenuV2: React.FC<StyledMenuProps> = ({ styled, children }) => {
  if (!children) return <span />;
  return (
    <Container id='StyledMenuV2' className='ol-control' styled={!!styled}>
      {children}
    </Container>
  );
};
export default StyledMenuV2;
