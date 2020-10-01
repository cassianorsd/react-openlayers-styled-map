import React from 'react';
import Controls from './Controls';
import { useMap, MapProvider } from './Hooks';
import StyledMap from './StyledMap';

const Card: React.FC & { Body: React.FC } = ({ children }) => (
  <div>{children}</div>
);
const Body: React.FC = () => <div>Body</div>;
Card.Body = Body;

export { StyledMap, Controls, useMap, MapProvider, Card };
