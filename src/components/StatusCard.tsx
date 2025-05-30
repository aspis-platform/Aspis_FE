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
  border: 2px solid ${theme.color.sub[4]};
  border-radius: 20px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2px;

  font-size: 24px;
  font-weight: 600;

  @media (max-width: 925px) {
    width: 120px;
    height: 68px;

    font-size: 20px;
  }
`;
const Name = styled.div`
  font-size: 16px;
  font-weight: 500;

  @media (max-width: 925px) {
    font-size: 12px;
  }
`;
const CardSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;

  @media (max-width: 925px) {
    gap: 8px;
  }
`;

export default StatusCard;
