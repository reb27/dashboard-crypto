import React, { useState, useRef } from "react";
import styled, { css } from "styled-components";
import { space, SpaceProps } from "styled-system";
import { Icon } from "../Icon/Icon";
import debounce from "lodash/debounce";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

interface InputProps extends SpaceProps {
  icon?: string;
  rightIcon?: string;
  placeholder?: string;
  onChange?: (event: any) => void;
  onFocus?: (event: any) => void;
}

interface Option {
  id: string;
  name: string;
}

const InputWrapper = styled.div`
  position: relative;
`;

const StyledInput = styled.input<InputProps>`
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  background-color: #eff2f5;
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
    color: #a7b1c2;
    font-size: 16px;
    font-style: bold;
    padding: 2px;
  }

  &::-ms-input-placeholder {
    color: #a7b1c2;
    font-size: 16px;
    font-style: bold;
  }

  &:focus {
    outline: none;
    box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.1);
  }

  ${space}
`;

const IconWrapper = styled.div<{ position: "left" | "right" }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${(props) => props.position}: 10px;
`;

const OptionsWrapper = styled.div`
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  z-index: 1;

  /* Estilos para exibir o OptionsWrapper apenas quando o input estiver focado */
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease-in-out;

  &.show {
    opacity: 1;
    pointer-events: auto;
  }
`;

const OptionItem = styled.div`
  padding: 10px;
  font-size: 16px;
  color: #444;
  cursor: pointer;

  &:hover {
    background-color: #f2f2f2;
  }
`;
export const Input: React.FC<InputProps> = ({
  icon,
  rightIcon,
  placeholder,
  onChange,
  onFocus,
}) => {
  const [inputValue, setInputValue] = useState("");
  const lastValueRef = useRef("");
  const history = useHistory();

  const [coins, setCoins] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      );
      setCoins(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const [filteredCoins, setFilteredCoins] = useState([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    lastValueRef.current = newValue;

    debounce(() => {
      if (lastValueRef.current === newValue) {
        setFilteredCoins(
          coins.filter((coin) =>
            (coin as any).name.toLowerCase().includes(newValue.toLowerCase())
          )
        );
      }
    }, 500)();
  };

  const handleOptionClick = (option: string) => {
    setInputValue(option);
    console.log({ option });
  };

  const [showOptions, setShowOptions] = useState(false);

  function handleInputFocus() {
    setShowOptions(true);
  }

  function handleInputBlur() {
    setShowOptions(false);
  }

  function handleWrapperMouseDown(event: React.MouseEvent<HTMLDivElement>) {
    event.preventDefault();
  }
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
      <StyledInput
        onChange={handleChange}
        icon={icon}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        rightIcon={rightIcon}
        placeholder={placeholder}
        value={inputValue}
      />
      <OptionsWrapper
        onMouseDown={handleWrapperMouseDown}
        className={showOptions ? "show" : ""}
      >
        {filteredCoins &&
          filteredCoins.map((coin) => (
            <OptionItem onClick={() => handleOptionClick(coin)}>
              <p>
                {(coin as any).id.charAt(0).toUpperCase() +
                  (coin as any).id.slice(1).toLowerCase()}
              </p>
            </OptionItem>
          ))}
      </OptionsWrapper>
    </InputWrapper>
  );
};
