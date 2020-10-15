import React from 'react';
import { Container } from './styles';

export interface StyledMenuV3Props {
  showRibbon?: boolean;
}

const StyledMenuV3: React.FC<StyledMenuV3Props> = ({
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
export default StyledMenuV3;
