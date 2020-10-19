import variables from './variables.scss';

const { red, green, yellow, orange, blue, hover, blank } = variables;

const Theme = { red, green, yellow, orange, blue, hover, blank };
export type ThemeProps = typeof Theme;
export default Theme;
