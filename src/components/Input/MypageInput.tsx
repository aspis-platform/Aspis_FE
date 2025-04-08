import React from "react";
import { theme } from "../../style/theme";
import styled from "styled-components";

interface Prop {
  label: string;
  type: string;
  placeholder: string;
  onHandleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const MypageInput = ({ label, type, placeholder, onHandleChange }: Prop) => {
  return (
    <StyledSection>
      <Label>{label}</Label>
      <Input
        onChange={(event) => onHandleChange(event)}
        placeholder={placeholder}
        type={type}
      />
    </StyledSection>
  );
};

const Input = styled.input`
  width: 100%;
  height: 48px;
  border-radius: 3px;
  border: 1px solid #b6b6b6;
  padding-left: 12px;
  font-size: 20px;
  font-weight: 500;

  @media (max-width: 925px) {
    height: 36px;
  }
`;
const Label = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: ${theme.color.black};
  @media (max-width: 925px) {
    font-size: 16px;
  }
`;
const StyledSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  @media (max-width: 925px) {
    gap: 8px;
  }
`;

export default MypageInput;
