import styled, { ThemedStyledInterface } from 'styled-components';
import { DefaultControlsProps } from './functions/defaultControls';
import { GoogleStreetViewProps } from './StyledMenu/Controls/GoogleStreetView';
const theme = {
  colors: {
    color1: '#036d19',
    color2: '#B5CC18',
    color3: '#0081a7',
    color4: '#1E90FF',
    color5: '#FE2C54',
    color6: '#FFA500',
    color7: '#f9d423',
  },
};

export type ThemeProps = typeof theme;
export const themeStyled = styled as ThemedStyledInterface<ThemeProps>;

export interface StyledMapProps {
  width?: number;
  height?: number;
  id?: string;
  osmBasemap?: boolean;
  defaultControls?: DefaultControlsProps;
  controlsMenu?: {
    streetView?: GoogleStreetViewProps;
    exportImage?: {};
  };
  theme?: ThemeProps;
}
