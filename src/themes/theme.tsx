import { ThemeProvider } from 'styled-components';

const fontSizes: any = [14, 18, 20, 96];
fontSizes.body = fontSizes[0];
fontSizes.bodyLarge = fontSizes[1];
fontSizes.bodyExtraLarge = fontSizes[2];
fontSizes.displayExtraLarge = fontSizes[3];

const background = '#E5E5E5';
const text = '#000000';
const text_secondary = '#A7B1C2';
const positive_value = '#16C784';
const negative_value = '#EA3943';

const theme = {
  fontSizes,
  fonts: {
    background: 'Inter',
    secondary: 'IBM Plex Mono',
  },
  colors: {
    background,
    text,
    text_secondary,
    positive_value,
    negative_value
  },
};

export type ThemeType = typeof theme;

export const Theme: React.FC<any> = ({children}) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};