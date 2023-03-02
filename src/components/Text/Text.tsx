import styled from 'styled-components';
import { flex, color, typography, TypographyProps, space, SpaceProps, ColorProps, FlexProps, variant } from 'styled-system';
import { ThemeType } from '../../themes';

type TextProps = TypographyProps & SpaceProps & ColorProps & FlexProps & {
    variant?: string;
};

export const Text = styled.div<TextProps>`
  ${variant({
    variants: {
        title_black_font: {
            fontSize: '28px',         
            color: '#000',
        },
        normal_black_font: {
            fontSize: '16px',         
            color: '#000',
        },
        normal_grey_font: {
            fontSize: '16px',         
            color: '#A7B1C2',
        },
    },
})}
  ${flex}
  ${color}
  ${typography}
  ${space}
`;



Text.defaultProps = {
    variant: 'default',
};
