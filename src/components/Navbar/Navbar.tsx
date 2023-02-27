import styled from 'styled-components';
import { layout, LayoutProps, space, SpaceProps } from 'styled-system';
import { ThemeType } from '../../themes';

type RowProps = LayoutProps & SpaceProps;

export const Row = styled.div<RowProps>`
  display: flex;
  background:  #ffff;
  flex-direction: row;
  ${layout}
  ${space}
`;