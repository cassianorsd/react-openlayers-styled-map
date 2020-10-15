import { createGlobalStyle } from "styled-components";
import { rgba } from 'polished';
import ThemePallete from "../config/ThemePallete";

export const AppStyle = createGlobalStyle`
  body {
    background-color:${rgba(ThemePallete.darkBlue,0.03)};
  }
`;