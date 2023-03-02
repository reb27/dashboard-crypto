import { ThemeProvider } from 'styled-components';

const fontSizes: any = [14, 18, 20, 96];
fontSizes.body = fontSizes[0];
fontSizes.bodyLarge = fontSizes[1];
fontSizes.bodyExtraLarge = fontSizes[2];
fontSizes.displayExtraLarge = fontSizes[3];

const background = '#E5E5E5';
const text = '#000000';

const theme = {
  fontSizes,
  fonts: {
    background: 'Inter',
    secondary: 'IBM Plex Mono',
  },
  colors: {
    background,
    text,
  },
};

export type ThemeType = typeof theme;

export const Theme: React.FC<any> = ({children}) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};