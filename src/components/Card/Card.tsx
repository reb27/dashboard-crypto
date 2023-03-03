import React from "react";
import styled from "styled-components";
import { Icon } from "../Icon";
import { ICoin } from "../../interfaces/ICoin";
import { color } from "styled-system";

export type CardProps = {
  id?: string;
  name: string;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap_rank: number;
  isActive?: boolean;
  onClick?: () => void;
};

const StyledCard = styled.div`
  width: 222px;
  height: 119px;
  background-color: #fff;
  border: 1px solid #ddd;
  box-shadow: none;
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 15px;
  transition: box-shadow 0.3s ease-in-out;
  &:hover {
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.3);
  }
`;

const Title = styled.h2`
  font-size: 28px;
  font-family: "IBM Plex Mono";
  color: #1e3146;
`;

const Percentage = styled.span<{ color: "#16C784" | "#EA3943" }>`
  font-size: 14px;
  color: ${(props) => props.color};
`;

const ValueText = styled.span`
  font-size: 14px;
  color: #a7b1c2;
  font-weight: 400;
`;

const TextWrapper = styled.p`
  display: flex;
  align-items: center;
`;
const CardSession1 = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  gap: 5px;
  width: 30%;
`;
const CardSession2 = styled.div`
  width: 100%;
`;

export const Card: React.FC<CardProps> = ({
  name,
  current_price,
  price_change_percentage_24h,
  market_cap_rank,
}) => {
  return (
    <StyledCard>
      <CardSession1>
        <Title>{market_cap_rank}</Title>
        <Icon variant="favorito_ativo"></Icon>
      </CardSession1>
      <CardSession2>
        <TextWrapper>
          <Title>{name}</Title>
          <Icon variant="crescimento" width="9" height="23"></Icon>
        </TextWrapper>
        <ValueText>
          {current_price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </ValueText>
        <Percentage
          color={price_change_percentage_24h < 0 ? "#EA3943" : "#16C784"}
        >
          {price_change_percentage_24h}%
        </Percentage>
      </CardSession2>
    </StyledCard>
  );
};
