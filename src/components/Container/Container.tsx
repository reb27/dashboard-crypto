
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

type ContainerProps = LayoutProps &
  SpaceProps &
  ColorProps &
  BorderRadiusProps &
  BorderProps &
  FlexboxProps & {
    variant?: string;
  };

export const Container = styled.div<ContainerProps>`
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

Container.defaultProps = {
  variant: 'default',
};