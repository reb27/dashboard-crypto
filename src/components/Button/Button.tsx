import styled from 'styled-components';
import { space, SpaceProps, variant } from 'styled-system';

type ButtonProps = SpaceProps & {
  variant?: string;
};


export const Button = styled.button<ButtonProps>`
  padding: 10.5px 16px;
  cursor: pointer;
  ${variant({
    variants: {
      default: {
        backgroundColor: 'transparent',
        color: '#000',
        borderRadius: '8px',
        fontSize: '16px',
        display: 'flex',
        gap: '4px',
        width: '105px',
        height: '40px',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        transition: '0.25s',
        '&:hover': {
          color: '#A7B1C2',
        }
  
      },
      primary: {
        borderRadius: '8px',
        color: '#fff',
        fontSize: '16px',
        backgroundColor: '#3C67F7',
        width: '91px',
        height: '40px',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        transition: '0.25s',
        '&:hover': {
          backgroundColor: '#5d80f5',
        }
      },
    },
  })}
  ${space}
`;

Button.defaultProps = {
  variant: 'default',
};