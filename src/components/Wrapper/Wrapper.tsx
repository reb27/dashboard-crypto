
import styled from 'styled-components';
import {
  border,
  BorderProps,
  borderRadius,
  BorderRadiusProps,
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
  variant
} from 'styled-system';

type WrapperProps = LayoutProps &
  SpaceProps &
  ColorProps &
  BorderRadiusProps &
  BorderProps &
  FlexboxProps & {
    variant?: string;
  };

export const Wrapper = styled.div<WrapperProps>`
    display: flex;
    ${variant({
    variants: {
      default: {
        flexDirection: 'column',
      },
      primary: {
        flexDirection: 'row',
        gap: '14px',
      },
    },
  })}
  ${space}
  ${flexbox}
  ${layout}
  ${space}
  ${color}
  ${borderRadius}
  ${border}
`;

Wrapper.defaultProps = {
  variant: 'default',
};