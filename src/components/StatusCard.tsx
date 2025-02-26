import React from "react";
import { theme } from "../style/theme";
import styled from "styled-components";

interface Prop {
  name: string;
  number: number;
  unit: string;
}

const StatusCard = (props: Prop) => {
  return (
    <CardSection>
      <Name>{props.name}</Name>
      <CardBox>
        <p>{props.number}</p>
        <p>{props.unit}</p>
      </CardBox>
    </CardSection>
  );
};

const CardBox = styled.div`
  width: 180px;
  height: 84px;
  background-color: ${theme.color.white};
  border: 2px solid ${theme.color.main[3]};
  border-radius: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2px;

  font-size: 24px;
  font-weight: 600;
`;
const Name = styled.div`
  font-size: 20px;
  font-weight: 600;
`;
const CardSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

export default StatusCard;
