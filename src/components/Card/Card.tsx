import React from "react";
import styled from "styled-components";

export type CardProps = {
  title: string;
  description: string;
  isActive?: boolean;
  onClick?: () => void;
};

const StyledCard = styled.div`
  width: 222px;
  height: 119px;
  margin-right: 18px;
  margin-right: 18px;
  background-color: #fff;
  border: 1px solid #ddd;
  box-shadow: none;
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.3);
  }
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 5px;
`;

const Description = styled.p`
  font-size: 14px;
`;

export const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <StyledCard>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </StyledCard>
  );
};
