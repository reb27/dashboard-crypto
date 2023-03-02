import React from 'react';
import styled, { css } from 'styled-components';
import { space, SpaceProps } from 'styled-system';
import { Icon } from '../Icon/Icon';

interface InputProps extends SpaceProps {
  icon?: string,
  rightIcon?: string,
  placeholder?: string
}

const InputWrapper = styled.div`
  position: relative;
`;

const StyledInput = styled.input<InputProps>`
    width: 100%;
    padding: 10px;
    border-radius: 8px;
    background-color: #EFF2F5;
    height: 40px;

  ${(props) =>
    props.icon &&
    css`
      padding-left: 35px;
    `}

  ${(props) =>
    props.rightIcon &&
    css`
      padding-right: 35px;
    `}

    &::placeholder {
      color: #A7B1C2;
      font-size: 16px;
      font-style: bold;
      padding: 2px
    }
  
    &::-ms-input-placeholder {
      color: #A7B1C2;
      font-size: 16px;
      font-style: bold;
    }
    &:focus {
      outline: none;
      box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.1);
    }
    
  ${space}
`;

const IconWrapper = styled.div<{ position: 'left' | 'right' }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${(props) => props.position}: 10px;
`;

export const Input: React.FC<InputProps> = ({ icon, rightIcon, placeholder }) => {
  return (
    <InputWrapper>
      {icon && (
        <IconWrapper position="left">
          <Icon variant={icon} />
        </IconWrapper>
      )}
      {rightIcon && (
        <IconWrapper position="right">
          <Icon variant={rightIcon} />
        </IconWrapper>
      )}
      <StyledInput icon={icon} rightIcon={rightIcon} placeholder={placeholder} />
    </InputWrapper>
  );
};
